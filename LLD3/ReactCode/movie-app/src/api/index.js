import axios from 'axios'

const THE_MOVE_API_TOKEN='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTE1MTEwYjE0MDk1OGNlMDAyZWUyMjVjMDVjMjczNiIsIm5iZiI6MTczMTMxMjM1Ni45NDE2MzQsInN1YiI6IjY3MmNkMmJhZGU1MTFlZDdkYTZhNGRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aAsHf0Nz-EKYaiYo1_KBiZciRCMiE9gKQTer3g4enkU'
export const moveAPIInstance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        Authorization:`Bearer ${THE_MOVE_API_TOKEN}`
    },
    responseType:'json'
})