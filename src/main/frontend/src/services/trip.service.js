import axios from 'axios';

const API_URL = 'http://localhost:8080/api/trip/';

class TripService {
    async createTrip(title, description, user_id, startDate, endDate, tripImage){
        return await axios.post(API_URL + "startTrip", {
            title,
            description,
            "creatorId" : user_id,
            startDate,
            endDate,
            tripImage
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
            params: {"Id" : user_id}
        })
        .then(response => {
            return response.data;
        });
    }

    async createTripExcursion(title, notes, picture, trip_id, longitude, latitude, ExcursionDateStart, ExcursionDateEnd){
        return await axios.post(API_URL + "startExcursion", {
            title,
            notes,
            picture,
            trip_id,
            longitude,
            latitude,
            ExcursionDateStart,
            ExcursionDateEnd
        })
        .then(response => {
            return response.data;
        });

    }

    async getTripExcursions(trip_id){
        return await axios.get(API_URL + "excursions",{
            params: {"tripId" : trip_id}
        })
        .then(response => {
            return response.data
        })
    }
}

export default new TripService();