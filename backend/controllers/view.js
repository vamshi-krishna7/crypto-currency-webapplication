const SaveCrypto = require('../models/saveCryptoData');

const saveCrytoData = async(req, res) => {
    
    try {
        const {id, market_cap, price, symbol, name} = req.body;
        const data = await SaveCrypto.findOne({id : id})
        if(data) {
            return res.status(400).json({msg: 'data already exists'}) 
        }else {
            const saveCrypto = new SaveCrypto({
                id : id,
                name: name,
                symbol: symbol,
                market_cap: market_cap,
                price: price
            })

            const savedCryptoDetails = await saveCrypto.save()
            return res.status(201).json(savedCryptoDetails)
        }
        
    }catch(error){
        return res.status(400).json({msg: 'bad request'})
    }
    
}

const getCrytoDataById = async(req, res) => {
    
    try {
        const data = await SaveCrypto.find({crytoId: req.params.id})
        if(data) {
            return res.status(200).json(data) 
        }
    }catch(error){
        return res.status(400).json({msg: 'bad request'})
    }
    
}

const getAllCrytoData = async(req, res) => {
    
    try {
        const data = await SaveCrypto.find()
           return res.status(200).json(data)
    }catch(error){
        return res.status(400).json({msg: 'bad request'})
    }
    
}


const deleteSavedCryptoData = async(req, res) => {
    try {
        const {id} = req.body
        await SaveCrypto.deleteOne({id: id})
           return res.status(200).json({msg: "Deleted Successfully"})
    }catch(error){
        return res.status(400).json({msg: 'bad request'})
    }
}

module.exports = {saveCrytoData, getCrytoDataById, getAllCrytoData, deleteSavedCryptoData}