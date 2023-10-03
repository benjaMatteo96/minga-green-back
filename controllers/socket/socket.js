import executeQueries from "../dialogFlow/dialogFlow.js";

const projectId = "mingabot-lhbx";
const languageCode = 'en';

export default (io) => {
    io.on('connection', (socket) => {
        console.log('Nuevo cliente conectado');


        const sessionId = socket.id;

        socket.on("chat", async (data) => {
            const response = await executeQueries.executeQueries(projectId, sessionId, [data], languageCode);

            // Envía la respuesta solo al cliente que envió el mensaje
            socket.emit("response", response);
        });

        socket.on('mensaje del cliente', (mensaje) => {
            console.log('Mensaje recibido:', mensaje);

            // Envía la respuesta solo al cliente que envió el mensaje
            socket.emit('mensaje del servidor', 'Respuesta del servidor: ' + mensaje);
        });
    });
};


