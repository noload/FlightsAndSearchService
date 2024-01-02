const {Airport} = require('../models/index');

class AirportRepository{

    async createAirport({name}){
        const airport= await Airport.create({});
    }


}