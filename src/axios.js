
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-77efc/us-central1/api'
});

export default instance;