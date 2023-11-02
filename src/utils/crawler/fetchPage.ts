import axios from 'axios';

export const fetchHtml = async (url: string) => {
    return await axios
        .get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        });
};
