import axios from 'axios';
const SearchImages = async(term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID MFRxvepruf_7smVexw52lK_3gbhnnRPkGE3fh8By0Lg '

        },
        params:{
            query:'term'

        }

    }

    );
    
    return response.data.results;
};
export default SearchImages;  