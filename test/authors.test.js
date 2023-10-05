import { expect } from 'chai';
import app from '../app.js';
import request from 'supertest';

describe('Tests para la API de autores', () => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYzYTg0YWMwMGU4OWQ0MTI3NWM5M2MiLCJlbWFpbCI6ImVyaWNAbWguY29tLmFyIiwiaWF0IjoxNjk2MDE2NTcyLCJleHAiOjE2OTYxMDI5NzJ9.-0vk-aOxLxXZthYRtV67v6Rxr-4ej1xalT5dCR7eSDQ'; // Almacena el token de autenticación

  before((done) => {
    // Antes de ejecutar los tests, inicia sesión y obtén el token
    request(app)
      .post('/auth/login')
      .send({
        email: 'eric@mh.com.ar', 
        password: 'hola1234', 
      })
      .end((err, res) => {
        if (err) throw err;
        token = res.body.token; // Almacena el token de autenticación
        done();
      });
  });

  it('Debería crear un nuevo autor', (done) => {
    request(app)
      .post('/authors')
      .set('Authorization', `Bearer ${token}`) // Establece el token de autenticación
      .send({
        name: 'NombreAutor',
        last_name: 'ApellidoAutor',
        city: 'Ciudad, ',
        country: 'País',
        date: '2023-12-28',
        photo: 'https://cdn.pixabay.com/photo/2023/09/23/04/14/boat-8270209_1280.jpg',
      })
      .expect(201) // Espera una respuesta con código 201 (creado)
      .end((err, res) => {
        if (err) return done(err);
        // Verifica la respuesta para asegurarte de que se creó el autor correctamente
        expect(res.body.success).to.equal(true);
        expect(res.body.response).to.have.property('_id');
        done();
      });
  });


  after((done) => {
    // Realiza tareas de limpieza después de ejecutar los tests si es necesario
    done();
  });
});
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
                .put('/authors/admin/64f3a96ad04f0f5ab5f37a66')
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


