const axios = require('axios');



const getClima = async(lng, lat) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lon=${lng}&lat=${lat}&units=metric&appid=8007c15934dadf91e7906257fd6c68bc`);

    return resp.data.main.temp;


};

module.exports = {
    getClima
};