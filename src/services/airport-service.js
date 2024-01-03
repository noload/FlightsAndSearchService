const CrudService = require("./crud-service");

const { AirportRepository } = require("../respository/index");

class AirportService extends CrudService {
  constructor() {
    const airportRepository = new AirportRepository();
    super(airportRepository);
  }
}

module.exports = AirportService;
