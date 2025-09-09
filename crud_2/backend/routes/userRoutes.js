const express = require("express");
const User = require("../models/User");
const router = express.Router();
const {
  handleGetAllUser,
  handleCreateNewUser,
  handleUpdateUser,
  handleDeleteUser,
} = require("../controllers/user");

router.post("/", handleCreateNewUser);
router.get("/", handleGetAllUser);

router.put("/:id", handleUpdateUser);

router.delete("/:id", handleDeleteUser);
module.exports = router;
