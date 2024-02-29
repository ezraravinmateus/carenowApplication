const { where } = require("sequelize");
const db = require("../models");
const Treatment = db.Treatment;

module.exports = {
    createTreatmentData: async (req, res) => {
        try {
            if (
                req.body.constructor === Object &&
                Object.keys(req.body).length === 0
            ) {
                console.log("Object missing");
                res.status(400).send({ error: "object is Missing" });
            } else {
                const result = await Treatment.create(req.body);
                res.status(200).send({
                    data: result,
                    message: "Create Treatment Success",
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: error.message });
        }
    },
    getTreatmentData: async (req, res) => {
        try {
            const result = await Treatment.findAll();
            res.status(200).send(result);
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: error.message });
        }
    },
};
