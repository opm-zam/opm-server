const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { createOrUpdateUser, currentUser} = require("../controllers/auth");
const { register} = require("../controllers/seller");
const {riderregister} =require("../controllers/rider");
router.post("/create-or-update-user", authCheck, createOrUpdateUser);

router.post("/current-admin", authCheck, adminCheck, currentUser);
router.post("/register", register);
router.post("/rider-register",riderregister);
module.exports = router;
