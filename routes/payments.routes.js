import express  from "express";
import { createOrder, receiveWebhook } from "../controllers/payment.controller.js";

const router = express.Router()

router.post("/create-order",createOrder)

router.get('/success', (req,res) => res.send('success'))

router.get('/failure', (req,res) => res.send('failure'))

router.get('/pending', (req,res) => res.send('pending'))

router.post('/webhook', (req,res) => res.send('webhook',receiveWebhook)) 

export default router