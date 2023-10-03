import mercadopago from "mercadopago";

// Configuración de Mercado Pago (debe hacerse una sola vez)
mercadopago.configure({
  access_token: "TEST-2410421729848611-092709-ce581bcdbfa708c7e036b26213b0b805-1492812698"
});

export const createOrder = async (req, res) => {
  try {
    const { unit_price } = req.body; // Obtiene la cantidad de donación del cuerpo de la solicitud

    // Crea una orden de compra con la cantidad proporcionada
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: "Donation",
          unit_price,
          currency_id: "ARS",
          quantity: 1
        }
      ],
      back_urls: {
        success: "http://localhost:5173/success",
        failure: "http://localhost:5173/failure",
        pending: "http://localhost:5173/pending",
      },
      notification_url: "https://6055-201-246-80-143.ngrok.io/payments/webhook/"
    });

    res.send(result.body);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500).json({ error: error.message });
  }
};

export const receiveWebhook = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type === 'payment') {
      await mercadopago.payment.findById(payment['data.id']);
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500).json({ error: error.message });
  }
};
