const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(
    {
      items: [
        {
          id: 1,
          name: "Ильин Тимофей"
        },
        {
          id: 2,
          name: "Мишуков Егор"
        }
      ]
    }
  );
});

module.exports = router;
