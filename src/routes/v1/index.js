const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");

const { FlightMidddleware } = require("../../middlewares/index");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.post("/city/add", CityController.addAll);
router.patch("/city/:id", CityController.update);

router.post("/flights", FlightController.create);

router.get("/flights", FlightController.getAll);

router.post("/airport", AirportController.create);

module.exports = router;
