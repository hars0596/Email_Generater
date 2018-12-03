const userController = require("../controller").User;
//const todoItemsController = require("../controllers").todoItems;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Todos API!"
    })
  );


  app.post('/api/user', userController.create);
  // app.get('/api/user', userController.list);
};
