import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`, 
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if(error?.response?.status===401){
            localStorage.removeItem('login');
            localStorage.removeItem('cartItems');
            localStorage.removeItem('wishListItems');
            window.location.replace(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/login`);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;