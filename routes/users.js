const express = require("express");
const router = express.Router();
router.use(logger);

router.get("/", (req, res) => {
  res.send("users/form", { firstName: "Test" });
});
router.get("/form", (req, res) => {
  res.send("New FOrm");
});
router.post("/", (req, res) => {
  res.send("create User");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get User by ID : ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User by ID : ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User by ID : ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Jhon" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
module.exports = router;
