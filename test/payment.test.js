import { expect } from "chai";
import app from '../app.js';
import request from "supertest";
/* 
const successUrl = '/payments/success';
const failureUrl = '/paymenst/failure'; */

describe("Tests for payment order", () => {

  it('It should create a payment order with valid data', async () => {
    const response = await request(app)
      .post('/payments/create-order')
      .send({
        unit_price: 1000, // Precio válido para una donación exitosa
        title: "Donation",
        currency_id: "ARS",
        quantity: 1,
      });

    expect(response.status).to.equal(200);
  })
/* 
  describe("GET /receiveWebhook", () => {
    it("Debería manejar el webhook correctamente", (done) => {
      chai
        .request(app)
        .get("/receiveWebhook")
        .query({ type: "payment", "data.id": "payment_id_here" }) // Reemplaza con un ID válido
        .end((err, res) => {
          expect(res).to.have.status(204);
          done();
        });
    });
  });
}); */

  /* 
    const redirectResponse = await request(app).get(successUrl);

  
    expect(redirectResponse.status).to.equal(302);

    expect(redirectResponse.header['location']).to.equal(successUrl);
  });

  it('It should redirect to the failure page after a failed donation', async () => {
    const response = await request(app)
      .post('/payments/create-order')
      .send({
        unit_price: 0, 
        title: "Donation",
        currency_id: "ARS",
        quantity: 1,
      });

    expect(response.status).to.equal(200);

    const redirectResponse = await request(app).get(failureUrl);

    expect(redirectResponse.status).to.equal(302);

    expect(redirectResponse.header['location']).to.equal(failureUrl);
  });
 */
  
});
