import { expect } from 'chai';
import app from '../app.js';
import request from 'supertest';

describe('Tests para la API de autores', () => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYzYTg0YWMwMGU4OWQ0MTI3NWM5M2MiLCJlbWFpbCI6ImVyaWNAbWguY29tLmFyIiwiaWF0IjoxNjk1OTkwMDgxLCJleHAiOjE2OTYwNzY0ODF9.i4mZgXzs_KVLqgIbCtF9FfqUWPitrqP3J9bPywv0EOI'; // Almacena el token de autenticación

  before((done) => {
    // Antes de ejecutar los tests, inicia sesión y obtén el token
    request(app)
      .post('/auth/login')
      .send({
        email: 'eric@mh.com.ar', // Cambia esto por tu dirección de email
        password: 'hola1234', // Cambia esto por tu contraseña
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
        city: 'Ciudad, País',
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

  it('Debería obtener la lista de autores', (done) => {
    request(app)
      .get('/authors')
      .expect(200) // Espera una respuesta con código 200 (éxito)
      .end((err, res) => {
        if (err) return done(err);
        // Verifica que la respuesta contenga una lista de autores
        expect(res.body.success).to.equal(true);
        expect(res.body.response).to.be.an('array');
        done();
      });
  });


  after((done) => {
    // Realiza tareas de limpieza después de ejecutar los tests si es necesario
    done();
  });
});
