import { io } from 'socket.io-client';
import { expect } from 'chai';

const socketURL = 'http://localhost:8000';

describe("socket", () => {
    let socket;

    beforeEach(function (done) {
        this.timeout(5000);

        // Conéctate al servidor antes de cada prueba
        socket = io.connect(socketURL, {
            'reconnection delay': 0,
            'reopen delay': 0,
            'force new connection': true,
        });

        socket.on('connect', () => {
            done();
        });

        socket.on('connect_error', (error) => {
            done(error);
        });
    });

    afterEach(function (done) {
        // Desconéctate después de cada prueba
        if (socket.connected) {
            socket.disconnect();
        }
        done();
    });

    it('debería enviar y recibir un mensaje', (done) => {
        const message = 'Hola, soy un mensaje de prueba';

        socket.emit('mensaje del cliente', message);

        socket.on('mensaje del servidor', (response) => {
            expect(response).to.equal('Respuesta del servidor: ' + message);
            console.log(response, message);
            done();
        });

        socket.on('error', (error) => {
            done(error);
        });
    });

    describe("Chat con el Bot", () => {
        it('debería poder iniciar una conversación con el bot', (done) => {
            // Envia un mensaje para iniciar una conversación
            socket.emit('mensaje del cliente', 'Hello');

            // Escucha la respuesta del bot
            socket.on('mensaje del servidor', (response) => {
                const expectedResponses = 'Respuesta del servidor: Hello'
                expect(expectedResponses).to.include(response);
                console.log(response);
                done();
            });

            socket.on('error', (error) => {
                done(error);
            });
        });

        it('debería poder enviar una pregunta al bot', (done) => {
            // Envia una pregunta al bot
            socket.emit('mensaje del cliente', 'how many mangas do you have?');

            // Escucha la respuesta del bot
            socket.on('mensaje del servidor', (response) => {
                expect(response).to.equal('Respuesta del servidor: how many mangas do you have?');
                console.log(response);
                done();
            });

            socket.on('error', (error) => {
                done(error);
            });
        });

        it('debería poder manejar preguntas desconocidas', (done) => {
            // Envia una pregunta desconocida al bot
            socket.emit('mensaje del cliente', 'Alice in Borderland');

            // Escucha la respuesta del bot
            socket.on('mensaje del servidor', (response) => {
                const expectedResponse = 'Respuesta del servidor: Alice in Borderland' ;
                expect(response).to.equal(expectedResponse);
                console.log(response);
                done();
            });

            socket.on('error', (error) => {
                done(error);
            });
        });
    });
});


