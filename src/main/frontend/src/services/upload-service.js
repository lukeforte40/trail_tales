import axios from "axios";

const API_URL = "http://localhost:8080/api/uploads/";

class UploadService{
    async Image(img){
        return await axios.post(API_URL + 'images', img, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {return response.data;})
    }
}

const uploadInstance = new UploadService();

export default uploadInstance;