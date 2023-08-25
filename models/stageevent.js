"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StageEvent extends Model {
    static associate(models) {
      // define association here
    }
  }
  StageEvent.init(
    {
      stage_event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stage_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "StageEvent",
      tableName: "stages_events",
      timestamps: false,
    }
  );
  return StageEvent;
};
