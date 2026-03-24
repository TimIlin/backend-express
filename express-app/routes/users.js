const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: "Ильин Тимофей" },
  { id: 2, name: "Мишуков Егор" }
];
let lastId = 2;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(
    {items: users}
  );
});


router.post('/',function(req, res, next){
  const { name } = req.body;
  const newUser = {
    id: ++lastId,
    name: name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
