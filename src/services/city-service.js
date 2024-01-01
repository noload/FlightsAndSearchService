const {CityRepository} = require('../respository/index');

class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error}
        }
    }

    async deleteCity(cityId){

        try {
            const city = await this.cityRepository.deleteCity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error}
        }

    }

    async updateCity(cityId,data){
        
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
        return city;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error}
        }
    }

    async getCityDetail(cityId){
        try {
            const city = this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("service layer error");
            throw {error}
        }
    }

    async getAllCities(filter){
        try {
            const city = this.cityRepository.getAllCities({name:filter.name});
            return city;

        } catch (error) {
            console.log("service layer error");
            throw {error}
        }
    }

    async addAllCities(city){
        try {
            const cities = this.cityRepository.addCities(city)
            return cities;
        } catch (error) {
            console.log("service layer error");
            throw {error}
        }
    }
}

module.exports = CityService