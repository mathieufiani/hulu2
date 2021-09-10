const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovie:{
        title:"Action",
        url: `/trending/all/week?api_key=${API_KEY}&with_genre=28`
    },
    fetchComedyMovie:{
        title:"Comedy",
        url: `/trending/all/week?api_key=${API_KEY}&with_genre=35`
    },
    fetchHorrorMovie:{
        title:"Horror",
        url: `/trending/all/week?api_key=${API_KEY}&with_genre=27`
    },
    fetchRomanceMovie:{
        title:"Romance",
        url: `/trending/all/week?api_key=${API_KEY}&with_genre=10749`
    },
    fetchMystery:{
        title:"Mystery",
        url: `/trending/all/week?api_key=${API_KEY}&with_genre=9648`
    },
    fetchSciFi:{
        title:"Sci-Fi",
        url: `/trending/all/week?api_key=${API_KEY}&with_genre=878`
    },
    fetchWestern:{
        title:"Western",
        url: `/trending/all/week?api_key=${API_KEY}&with_genre=37`
    },
}