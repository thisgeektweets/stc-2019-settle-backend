const express = require('express');
const { Expo } = require('expo-server-sdk');

const expo = new Expo();
const router = express.Router();

router.use(express.json());

const knownUsers = new Set();

// const createMessages = (users, message) => users.map((u) => ({
//   to: u.token,
//   title: `${message.company} has a new offer`,
//   body: message.body,
//   data: { code: message.code },
//   sound: 'default',
// }));

router.post('/register', (req, res) => {
  const {
    token,
  } = req.body;
  knownUsers.add({ token });
  res.json({ ok: true });
});

const tickets = [];
router.post('/push', async (req, res) => {
  console.log(knownUsers.length);
  console.log(JSON.stringify([...knownUsers]));
  const batch = [...knownUsers].map((u) => ({
    to: u.token,
    title: `${req.body.company} has a new offer`,
    body: req.body.body,
    data: { code: req.body.code },
    sound: 'default',
  }));
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
  return res.json({ ok: true, sent: batch.length });
});

module.exports = router;
