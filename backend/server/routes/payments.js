const express = require('express');
const { Expo } = require('expo-server-sdk');

const expo = new Expo();
const router = express.Router();

router.use(express.json());

router.post('/transaction', (req, res) => {
  console.log(JSON.stringify(req.body));
  return res.json({ ok: true });
});

module.exports = router;
