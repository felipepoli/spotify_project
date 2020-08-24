import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import store from '@/store'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : null, //obtenido en getToken
    Albums : [], // ultimos releases
    artists: [], //  artistas luego de la busqueda del usuario
    songs: [], // canciones, luego de la busqueda del usuario
    topTracks:[], // top canciones por artista para el componente Album
    ArtistAbout: [], //info del artista para el componente album
    ArtistAlbum:[], //info de los albums por artista para el componente Album
    userArtist:'', //busqueda del usuario
    userSong:'', //busqueda del usuario
    routeID: '',  //se almacena la ruta que viene de route.params.id para buscar el ID del artista
    
  },
  mutations: {
    
    defineToken(state,tokenAction){
      state.token = tokenAction
    },
    fillAlbums(state,AlbumAction){
      state.Albums = AlbumAction
    },
    findArtists(state,ArtistAction){
      state.artists = ArtistAction
    },
    findSong(state,songAction){
      state.songs = songAction
    },
    fillTopTracks(state,topTracksAction){
      state.topTracks = topTracksAction
    },
    fillArtistAbout(state,ArtistAboutAction){
    state.ArtistAbout = ArtistAboutAction
    },
    fillArtistAlbum(state,ArtistAlbumAction){
    state.ArtistAlbum = ArtistAlbumAction
    },
    defineUserArtist(state,userArtistAction){
    state.userArtist = userArtistAction
    },
    defineUserSong(state,userSongAction){
      state.userSong = userSongAction
    },
    defineID(state,IdAction){
      state.routeID = IdAction
    },

  },
  actions:{

    setId({commit},payload){ //luego del click del usuario en algun item de Artistas.vue, se ejecutan estas funciones
      commit('defineID',payload)
      store.dispatch('getTopTracks')
      store.dispatch('getArtistAlbum')
      store.dispatch('getArtistAbout')
    },
    getUserSong({ commit}, payload){ //Se captura el input del user para ejecutar la busqueda en la api
      commit('defineUserSong',payload)
      store.dispatch('getSong');
    },
    getUserArtist({ commit}, payload){ // Se captura el input del user para ejecutar la busqueda en la api
      commit('defineUserArtist',payload)
      store.dispatch('getArtists');
    },

    async getToken({ commit }){ //obtiene el token con el client id y el secreto
      const url = 'https://accounts.spotify.com/api/token';
      const clientId = "f2c70c6233e24168aea491a96912cc34";
      const secret = "11aa38c393f342519d2a98290ce8a598";
      const fullEncoded = btoa(`${clientId}:${secret}`);
      const data = {
          grant_type: "client_credentials"
      };
      try {
        const request = await fetch(url,{
          method:'POST',
          headers: {
              Authorization: `Basic ${fullEncoded}`,
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: Object.keys(data).map(key =>
          `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          ).join('&')
          });
          const datos = await request.json();
          const token = await datos.access_token
          commit ('defineToken', token)        
      } catch (error) {
        console.log(error);
        }
      finally{
      store.dispatch('getLastReleases')
      // store.dispatch('getArtists')
      }
    },
  

  async getLastReleases({ commit },state){ //obtiene releases con el token 
        const url = 'https://api.spotify.com/v1/browse/new-releases?country=CO&limit=50'
        try {
            const request = await fetch(url,{
            method:'GET',
            headers:{'Authorization': `Bearer ${this.state.token}`}
            })
            const data = await request.json();
            const album = await data.albums.items;
            commit('fillAlbums', album) 
        } catch (error) {
          console.log(error)
        }
  },
  async getArtists({commit}, state){ //Obtiene artistas luego de que se tenga el ID (luego de la busqueda del usuario)
    //
          const url = `https://api.spotify.com/v1/search?q=${this.state.userArtist}&type=artist&limit=5&offset=5`
          try {
              const request = await fetch(url,{
              method:'GET',
              headers:{
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.state.token}`}
              })
              const data = await request.json();
              const artist = await data.artists.items;
              commit('findArtists', artist);
              console.log(data);
              
          } catch (error) {
            console.log(error)
          }    
  },
  async getSong({commit}, state){ //ontiene cancion luego de la busqueda del usuario 
        
          const url = `https://api.spotify.com/v1/search?q=${this.state.userSong}&type=track&limit=10&offset=5`
          try {
              const request = await fetch(url,{
              method:'GET',
              headers:{
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.state.token}`}
              })
              const data = await request.json();
              const song = await data.tracks.items;
              commit('findSong', song);
              console.log(data); 
          } catch (error) {
            console.log(error)
          }
  },
  async getTopTracks({commit}, state){ //obtiene top tracks luego de que el user de click en un artista en la vista Artistas
          const url = `https://api.spotify.com/v1/artists/${this.state.routeID}/top-tracks?country=CO`
          try {
              const request = await fetch(url,{
              method:'GET',
              headers:{
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.state.token}`}
              })
              const data = await request.json();
              const top = await data.tracks;
              commit('fillTopTracks', top);
          } catch (error) {
            console.log(error)
          }
          
  },
   async getArtistAbout({commit}, state){ //obtiene Info del artista luego de que el user de click en un artista en la vista Artistas
           const url = `https://api.spotify.com/v1/artists/${this.state.routeID}`
           try {
              const request = await fetch(url,{
              method:'GET',
              headers:{
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.state.token}`}
              })
              const data = await request.json();
              const about = await data;
              commit('fillArtistAbout', about);
              console.log(data); 
           } catch (error) {
             console.log(error);
           }
           
  },
   async getArtistAlbum({commit}, state){ //obtiene album x luego de que el user de click en un artista en la vista Artistas
           const url = `https://api.spotify.com/v1/artists/${this.state.routeID}/albums?include_groups=single%2Cappears_on&limit=10&offset=5`
           try {
              const request = await fetch(url,{
              method:'GET',
              headers:{
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.state.token}`}
              })
              const data = await request.json();
              const artistal = await data.items;
              commit('fillArtistAlbum', artistal);
              console.log(data);
           } catch (error) {
             console.log(error);
           }
           
  }

}

})
