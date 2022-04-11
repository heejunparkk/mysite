const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KlT4JC3xifgcMaapEi4UsC9W1zMTVQO4q2tonoqaDTnk317N5FLF7NefUJIbBGmftzXkWjSOZWAViTPuxGRR87V00LRfbavap"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

// 라우트부분
app.get("/", (req, res) => res.status(200).send("안녕"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment에서 ㅇㅇㅇㅇㅇㅇㅇㅇ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/mysite-2ee22/us-central1/api
