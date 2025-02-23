// DEPENDENCIES
const bands = require("express").Router();
const db = require("../models");
const { Op } = require("sequelize");
const { Band } = db;

// FIND ALL BANDS
bands.get("/", async (req, res) => {
  const { name = "", limit = 5, offset = 0 } = req.query;
  try {
    const foundBands = await Band.findAll({
      order: [
        ["available_start_time", "ASC"],
        ["name", "ASC"],
      ],
      where: {
        name: { [Op.like]: `%${req.query.name ? req.query.name : ""}%` },
      },
      limit,
      offset,
    });
    res.status(200).json(foundBands);
  } catch (error) {
    res.status(500).json(error);
  }
});

bands.get("/", async (req, res) => {
  try {
    const foundBand = await Band.findOne({
      where: {
        band_id: req.params.id,
      },
    });
    res.status(200).json(foundBand);
  } catch (error) {
    res.status(500).json(e);
  }
});

// CREATE A BAND
bands.post("/", async (req, res) => {
  try {
    const newBand = await Band.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new band",
      data: newBand,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE A BAND
bands.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBands = await Band.update(req.body, {
      where: {
        band_id: id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedBands} band(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE A BAND
bands.delete("/:id", async (req, res) => {
  try {
    const deletedBands = await Band.destroy({
      where: {
        band_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedBands} band(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORT
module.exports = bands;

/*
const bands = require('express').Router();
const db = require('../models');
const { Op } = require('sequelize');
const { Band } = db;

bands.get('/', async (req, res) => {
    const { name = '' } = req.query;
    try {
        const foundBands = await Band.findAll({
            order: [['available_start_time', 'ASC' ], [ 'name', 'ASC']],
            where: {
                name: {
                    [Op.iLike] : `%${name}%`
                }
            }
        });
        res.status(200).json(foundBands);
    } catch (e) {
        res.status(500).json(e);
    }
});

bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: {
                band_id: req.params.id
            }
        });
        res.status(200).json(foundBand);
    } catch(e) {
        res.status(500).json(e)
    }
})

bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body);
        res.status(200).json({
            message: 'Successfully created a band',
            data: newBand
        });
    } catch (error) {
        res.status(500).json(error);
    }
})

bands.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedBand = await Band.update(req.body, {
            where: {
                band_id: id
            }
        });
        res.status(200).json({
            message: `successfully updated the band`,
            updatedBand
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

bands.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBand = await Band.destroy({
            where: {
                band_id: id
            }
        })
        res.status(200).json({
            message: `Successfully yeeted band id: ${id}`
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = bands;
*/
