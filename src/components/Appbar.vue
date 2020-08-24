<!--Este componente trae la bar en la app aloja la busqueda de artista y canción-->
<template>
<v-app-bar
      app
      color="dark"
      dark
    >
    <router-link to="/">
      <div class="d-flex align-center">
        <v-img
          alt="Spotify logo"
          class="shrink mr-2"
          rounded = "circle"
          contain
          src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png"
          transition="scale-transition"
          width="120"
        />
      </div>
    </router-link>

      <v-spacer></v-spacer>
      
      <v-form @submit.prevent="getUserArtist(userArtist)">
                 
                  <v-text-field 
                  label="  Buscar Artista" 
                  hide-details="auto" 
                  v-model="userArtist"
                  v-on:keyup.enter="compareRoutesArtist()"
                  >
                  </v-text-field>
        </v-form>
        
        
        
        <v-form  @submit.prevent="getUserSong(userSong)">
                  <v-text-field
                  label="  Buscar Canción" 
                  hide-details="auto" 
                  v-model="userSong"
                  v-on:keyup.enter="compareRoutesSongs()"
                  ></v-text-field>
        </v-form>

    </v-app-bar>  
</template>

<script>
import {mapActions} from 'vuex'
import router from '@/router'
export default {
    data() {
        return {
            compare: true,
            userArtist:'',
            userSong:''

        }
    },
    name: 'Appbar',
    methods: {
      //en los metodo de compare, comparan las rutas actual y push para evitar el error de doble llamado a la misma url
        compareRoutesArtist(){
          if(this.$route != '/artists'){
            this.$router.push('/artists').catch(()=>{})
          }
          },
          compareRoutesSongs(){
          if(this.$route != '/songs'){
            this.$router.push('/songs').catch(()=>{})
          }
          },
          deletecontent(){
            
          },
          //En los metodos importados se envia información a la tienda de lo que registra el usuario en el input
        ...mapActions(['getUserArtist','getUserSong'])
    },
}
</script>