const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, data: [] });
});

router.post('/scan', (req, res) => {
  res.json({ success: true, message: 'Scan started' });
});

module.exports = router;
