const router = require("express").Router();
const { treatmentController } = require("../controllers");

router.post("/", treatmentController.createTreatmentData);

module.exports = router;
