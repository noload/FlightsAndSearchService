const { City } = require('../models/index');

class CityRepository{
    async createCity({name}){
        try {
            //used to inser data in City model //cities table
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error}
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        } catch (error) {
            throw{error}
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;

            // const city = await City.findByPk(cityId);
            // city.name = data.name;
            // await city.save();
            // return city;
            

        } catch (error) {
            console.log("something went wrong");
            throw {error}
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong");
            throw {error}
        }
    }
}

module.exports = CityRepository;