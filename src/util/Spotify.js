import CLIENT_ID from './CLIENT_ID';
const REDIRECT_URI = 'http://localhost:3000/'
let accessToken; 


const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }
        // checks for access token match
        const accessTokenMatch = document.URL.match(/access_token=([^&]*)/);
        const expiresInMatch = document.URL.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            //this clears paramaters allowing us to grab new access token when it expires
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken
        } else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`
            document.URL = accessURL;
        }
    },

    async search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            if(response.ok) {
                return response.json()
            }
            throw new Error(`error code: ${response.status}`)
        }).then(jsonResponse => {
            if(!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artists: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
                })
            )
        }).catch(err => console.log(err));
    }
}

export default Spotify;