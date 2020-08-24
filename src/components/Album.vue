<!--Este componente muestra en pantalla la información de un artista en especifico, luego de que el user
ha elegido uno en la vista de "Artistas", el componente es usado en la vista Album.vue-->
<template>
    <v-container >
        <v-row mt-2>
            <v-col>
                <v-card
                    class="mx-auto"
                    max-width="500"
                    tile
                  >
                  <v-container>
                        <v-card >
                            <v-row justify="space-around">
                            <v-avatar size="200" class="mt-5 mb-5">
                            <img
                            :src="`${ArtistAbout.images[0].url}`"
                            >
                            </v-avatar>
                            </v-row>
                            <v-card-text>About</v-card-text> 
                            <v-divider></v-divider>
                        </v-card>
                        <v-card
                            class="overflow-y-auto"
                            max-height="250"
                            >
                            <v-card-text><div
                            v-for="n in 12"
                            :key="n"
                            class="mb-8"
                            >
                            hola
                            </div></v-card-text>
                        </v-card> 
                   </v-container>
                </v-card>
            </v-col>
            <v-col>
            <v-card>
                <v-card-title>Albums</v-card-title>
                <v-row no-gutters>
                    <v-col>
                         <v-card
                        class="overflow-y-auto"
                        max-height="200"
                        >
                        <v-container>
                            <v-row>
                                <v-col v-for="item of ArtistAlbum" :key="item.uri">
                                <v-card 
                                width="100"
                                >
                                    <v-img 
                                    height="80"
                                    width="80"
                                    :src = "`${item.images[0].url}`"
                                    >

                                    </v-img>  
                                    <v-card-text >
                                    <div class="d-inline-block text-truncate white--text mt-5" style="max-width: 100px;">{{item.name}}</div>
                                    <div class="caption">{{item.release_date}}</div>
                                     </v-card-text>

                                </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                        </v-card>
                    </v-col>
                </v-row>
               <v-card-text>Most Popular Tracks</v-card-text> 
                <v-divider></v-divider>
                <v-row>
                    <v-col>
                      <v-card
                        class="overflow-y-auto"
                        max-height="200"
                        > 
                        <v-container>
                        <v-row>
                          <v-col cols="auto" v-for="item of topTracks" :key="item.uri">
                             <v-card width="400" class="mx-auto " height="70">
                                
                                <v-row no-gutters>
                                    <v-col>
                                        <v-img 
                                        height="50"
                                        width="50"
                                        :src = "`${item.album.images[0].url}`"
                                        ></v-img>   
                                    </v-col>
                                    <v-col>
                                        <v-card-text >
                                        <div class="d-inline-block text-truncate white--text" style="max-width: 180px;">{{item.name}}</div>
                                        <div class="caption">{{item.album.name}}</div>
                                         </v-card-text>
                                        <v-card-actions></v-card-actions>
                                    </v-col>
                                </v-row>
                                
                             </v-card>
                            </v-col>
                        </v-row>
                        </v-container>
                                
                      </v-card>
                    </v-col>
                </v-row>
            </v-card>
            </v-col>
        </v-row> 
    </v-container>
</template>

<script>
import { mapActions, mapState} from 'vuex'
import router from '@/router'
export default {
    name: 'Album',
    data() {
        return {
           
        }
    },
    computed: {
       ...mapState(['topTracks','ArtistAbout', 'ArtistAlbum']) 
    },
    methods: {
        ...mapActions(['setId'])
        
    },
    //En el metodo SetId()Se envia información a la tienda del id de la ruta para que se defina el ID del artista que va a ser buscado para llenar
    //la info de un artista especifico
    created() {
        this.setId(this.$route.params.id)
    },
}
</script>