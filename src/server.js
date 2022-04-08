export default function server(url){
    const defaultPath = 'https://api.themoviedb.org/3/movie';
    const API_KEY = 'bd3ae83dd0d37b18204b0b3ff659ebff';
    const language = 'ru'
    const _url = `${ defaultPath }/${url}?api_key=${API_KEY}&language=${language}&region=${language}`;
    return fetch(_url).then(res => {
        return res.json();
    })
}