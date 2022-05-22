const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getUser,
  getAllUsers,
  addmatch,
  genderedUsers,
  updateUser,
  userDelete,
  logout,
} = require("../controllers/usercontroller");

router

  // ------------------Register---------------------//
  .post("/signup", signup)

  // ------------------Login---------------------//
  .post("/login", login)

  // ------------------Get individual user-----------//
  .get("/user", getUser)

  // ------------------Get all Users by userIds---------------------//
  .get("/users", getAllUsers)

  // ------------------Update User with a match-----------//
  .put("/addmatch", addmatch)

  // ------------------Get all the Gendered Users-----------//
  .get("/gendered-users", genderedUsers)

  // ------------------Update a User-----------//
  .put("/user", updateUser)

  // -------------------Delete User-------------//
  .delete("/delete", userDelete)

  // ------------------Logout---------------------//
  .get("/logout", logout);

module.exports = router;
