const router = require("express").Router();
const v1Router = require("./v1Routes/index");

router.use("/v1", v1Router);

module.exports = router;
