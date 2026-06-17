const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.json({ success: true, data: { cpu: 0, memory: 0, uptime: 0 } });
});

module.exports = router;
