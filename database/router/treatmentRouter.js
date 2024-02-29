const router = require("express").Router();
const { treatmentController } = require("../controllers");

router.post("/", treatmentController.createTreatmentData);
router.get("/", treatmentController.getTreatmentData);

module.exports = router;
