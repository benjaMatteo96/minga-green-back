//sprint 5 M05-test//
import { expect } from 'chai';
import app from '../app.js';
import request from 'supertest';

/*
  * Test the /POST route
  */
describe('set de test a /auth', () => {

    before(function (done) {
        this.timeout(3000)
        setTimeout(done, 2500)
    })

    describe('post/', () => {

        it('deberia retornar la informacion de un usuario con status 200', async () => {

            const response = await request(app)
                .post('/auth/signin')
                .send({
                    email: 'lucas@mh.com.ar',
                    password: 'hola1234'
                });

            expect(response.status).to.be.equal(200);
            //expect(response.body.name).to.be.equal('');//
        });

        it('deberia responder status 400, credenciales incorrectas', async () => {

            const response = await request(app)
                .post('/auth/signin')
                .send({
                    email: 'lucas@mh.com.ar',
                    password: 'hola12345'
                });
            expect(response.status).to.be.equal(401);
            expect(response.body.error).to.be.equal('Credenciales incorrectas');
        });
    })

})



/*
  * Test the /GET route
  */
describe('set de test a /auth', () => {

    before(function (done) {
        this.timeout(3000)
        setTimeout(done, 2500)
    })

    describe('get/', () => {

        it('deberia leer un  usuario', async () => {

            const response = await request(app)
                .get('/auth')
                .send({
                    email: 'lucas@mh.com.ar',
                    password: 'hola1234'
                });

            expect(response.status).to.be.equal(200);
            //expect(response.body.name).to.be.equal('');//
        });
    })

})

