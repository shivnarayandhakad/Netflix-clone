const API_KEY = '9f104973cfcf7c64eb8794acbffca971';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
};

export default requests;


