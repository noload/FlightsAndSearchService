const {CityService} = require('../services/index');

const cityService = new CityService();

const create =async (req,res)=>{
    try {
       const city = await cityService.createCity(req.body) ;
       return res.status(201).json({
        data:city,
        success:true,
        message:"successfully created a city",
        err:{}
       });
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create city",
            err:error
        });
    }
}
const destroy = async(req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id) ;
        
        return res.status(200).json({
         data:response,
         success:true,
         message:"successfully deleted city",
         err:{}
        }); 
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to deleted a city",
            err:error
        });
    }
}
const update =async (req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body) ;
        return res.status(200).json({
         data:response,
         success:true,
         message:"successfully updated city",
         err:{}
        }); 
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update city",
            err:error
        });
    }
    }
 
const get =async (req,res)=>{
 try {
    const citydetail =  await cityService.getCityDetail(req.params.id);
    res.status(200).json({
        data:citydetail,
        success:true,
        message:"City details get successfully",
        err:{}
    })
 } catch (error) {
    res.status(500).json({
        data:{},
        success:false,
        message:"Not able to get city",
        err:error.message
    })
 }
}


const getAll = async(req,res)=>{
    try {
        
        const cities = await cityService.getAllCities();
        res.status(200).json({
            data:cities,
            success:true,
            message:"City details get successfully",
            err:{}
        })

    } catch (error) {
        res.status(404).json({
            data:{},
            success:false,
            message:"Not able to get cities",
            err:error
        })
    }
}
module.exports={
    create,
    destroy,
    get,
    update,
    getAll
}