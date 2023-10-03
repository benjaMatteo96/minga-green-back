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
