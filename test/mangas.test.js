//sprint5-M04-test//
import app from '../app.js';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const expect = chai.expect;

describe('getAllMangas', () => {

    before(function (done) {
        this.timeout(3000)
        setTimeout(done, 2500)
    });

    it('debería obtener una respuesta exitosa', async () => {
        const response = await chai.request(app).get('/mangas');

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('mangas');
        expect(response.body.mangas).to.be.an('array');
    });
});
