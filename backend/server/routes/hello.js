const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/hello', (req, res, next) => {
  res.json({ ok: 'hello' });
});

module.exports = router;
