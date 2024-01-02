const {FlightService} = require('../services/index');

const flightService = new FlightService();


const create = async (req,res)=>{
    console.log(req.body);
    try {
        const flight = await flightService.createFlight(req.body);
        
        res.status(200).json({
            data:flight,
            success:true,
            message:"flight created successfully",
            err:{}
        })
    } catch (error) {
        res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a flight",
            err:error
        })
    }
}

const getAll =async (req,res)=>{
    try {
        const resp = await flightService.getFlightData(req.query);
        res.status(200).json({
            data:resp,
            success:true,
            message:"flight fetched successfully",
            err:{}
        })
    } catch (error) {
        res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get  flights",
            err:error
        })
    }
}

module.exports ={
    create,
    getAll
}