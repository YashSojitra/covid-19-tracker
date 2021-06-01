import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const dailyUrl = 'https://api.covid19india.org/v4/min/timeseries.min.json';

export const fetchData = async () => {
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        return {confirmed, recovered,deaths, lastUpdate};
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(dailyUrl);
        console.log(data);
    } catch (error) {
        
    }
}

