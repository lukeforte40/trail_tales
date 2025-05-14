import axios from 'axios';

const API_URL = 'http://localhost:8080/api/trip/';

class TripService {
    async createTrip(title, description, startDate, endDate, picture, user_id){
        return await axios.post(API_URL + "startTrip", {
            title,
            description,
            startDate,
            endDate,
            picture,
            user_id
        })
        .then(response => {
            return response.data;
        });
    }

    async getTrips(){
        return await axios.get(API_URL + "trips")
        .then(response => {
            return response.data;
        });
    }

    async getUserTrips(user_id){
        return await axios.get(API_URL + "userTrip", {
            user_id
        })
        .then(response => {
            return response.data;
        });
    }
}

export default new TripService();