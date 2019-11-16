const express = require('express');
const { Expo } = require('expo-server-sdk');

const expo = new Expo();
const router = express.Router();

router.use(express.json());

const figbar = 'ExponentPushToken[j2A4CMB7f7Z6grJrokBKHB]';

tickets = [];
router.post('/transaction', async (req, res) => {
  console.log(JSON.stringify(req.body));
  const batch = [{
    to: figbar,
    title: 'Todd Pitcher participated in offer',
    body: `Your customer just spent £${req.body.amount} using ${req.body.card.scheme}\nAt Location: ${req.body.location.address}, ${req.body.location.city}`,
    sound: 'default',
  }];
  const chunks = expo.chunkPushNotifications(batch);
  // time, which nicely spreads the load out over time:
  for (const chunk of chunks) {
    try {
      const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
      console.log(ticketChunk);
      tickets.push(...ticketChunk);
    // NOTE: If a ticket contains an error code in ticket.details.error, you
    // must handle it appropriately. The error codes are listed in the Expo
    // documentation:
    // https://docs.expo.io/versions/latest/guides/push-notifications#response-format
    } catch (error) {
      console.error(error);
    }
  }
  return res.json({ ok: true });
});

module.exports = router;
