const Emails = require("../controllers/Emails");

const { Router } = require("express");
const router = Router();

router.post("/email", Emails);

module.exports = router;