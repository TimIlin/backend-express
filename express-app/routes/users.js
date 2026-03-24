const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: "Ильин Тимофей" },
  { id: 2, name: "Мишуков Егор" }
];
let lastId = 2;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
    {items: users}
  );
});

router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
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
