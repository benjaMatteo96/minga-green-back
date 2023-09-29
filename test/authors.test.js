import { expect } from 'chai';
import app from '../app.js';
import request from 'supertest';




describe('set de test a /authors', () => {

    before(function (done) {
        this.timeout(3000)
        setTimeout(done, 2500)
    })

    describe('Put /authors/admin', () => {
        it('debería responder con status 404 si el autor no se encuentra', async () => {
            const response = await request(app)
                .put('/authors/admin/64f3a96ad04f0f5ab5f37a66')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYzYTg0YWMwMGU4OWQ0MTI3NWM5M2UiLCJlbWFpbCI6InNpbHZpbmFAbWguY29tLmFyIiwiaWF0IjoxNjk2MDA1OTYzLCJleHAiOjE2OTYwOTIzNjN9.7uribaq2z66eJg35uo9i_iCTrmeOHwmTzYwUtWkfShY')

            expect(response.status).to.be.equal(404);
            expect(response.body.message).to.be.equal('Autor no encontrado');
        });

        it('debería cambiar el rol del autor y responder con status 200', async () => {
            const response = await request(app)
                .put('/authors/admin/64f3a96ad04f0f5ab5f37a66')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYzYTg0YWMwMGU4OWQ0MTI3NWM5M2UiLCJlbWFpbCI6InNpbHZpbmFAbWguY29tLmFyIiwiaWF0IjoxNjk2MDA1OTYzLCJleHAiOjE2OTYwOTIzNjN9.7uribaq2z66eJg35uo9i_iCTrmeOHwmTzYwUtWkfShY')
            expect(response.status).to.be.equal(200);
            expect(response.body.message).to.be.equal('Rol del usuario actualizado con éxito');
        });

        it('debería responder con status 500 en caso de error en la actualización', async () => {
            const response = await request(app)
                .put('/authors/admin/64f3a96ad04f0f5ab5f37a66103')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYzYTg0YWMwMGU4OWQ0MTI3NWM5M2UiLCJlbWFpbCI6InNpbHZpbmFAbWguY29tLmFyIiwiaWF0IjoxNjk2MDA1OTYzLCJleHAiOjE2OTYwOTIzNjN9.7uribaq2z66eJg35uo9i_iCTrmeOHwmTzYwUtWkfShY')

            expect(response.status).to.be.equal(500);
            expect(response.body.message).to.be.equal('Error al actualizar el rol del usuario');
        });
    });
});


describe('set de test a /authors', () => {
    describe('GET authors/admin', () => {
        it('debería leer un usuario con permisos de administrador', async () => {

            const authenticatedUser = {
                _id: '64f3a84ac00e89d41275c93e',
                email: 'silvina@mh.com.ar'

            };

            const response = await request(app)
                .get('/authors/admin')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYzYTg0YWMwMGU4OWQ0MTI3NWM5M2UiLCJlbWFpbCI6InNpbHZpbmFAbWguY29tLmFyIiwiaWF0IjoxNjk2MDA1OTYzLCJleHAiOjE2OTYwOTIzNjN9.7uribaq2z66eJg35uo9i_iCTrmeOHwmTzYwUtWkfShY')
            expect(response.status).to.be.equal(200);
            expect(response.body.user).to.deep.equal({
                _id: authenticatedUser._id,
                email: authenticatedUser.email,
            });

        });

        it('debería responder con un mensaje de error si el usuario no tiene permisos de administrador', async () => {
            const response = await request(app)
                .get('/authors/admin')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYzYTg0YWMwMGU4OWQ0MTI3NWM5M2UiLCJlbWFpbCI6InNpbHZpbmFAbWguY29tLmFyIiwiaWF0IjoxNjk2MDA1OTYzLCJleHAiOjE2OTYwOTIzNjN9.7uribaq2z66eJg35uo9i_iCTrmeOHwmTzYwUtWkfShY')

            expect(response.status).to.be.equal(403);
            expect(response.body.message).to.be.equal('Acceso denegado. Se requieren permisos de administrador.');
        });

    });
});

