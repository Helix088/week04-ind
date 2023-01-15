const express = require("express");
const router = express.Router();

router.use("/contacts", require("./contacts"));

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = router;
