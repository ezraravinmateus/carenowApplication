"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Treatment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Treatment.init(
        {
            patientName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            patientID: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            treatmentDescription: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            medicinePrescription: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            costOfTreatment: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Treatment",
        }
    );
    return Treatment;
};
