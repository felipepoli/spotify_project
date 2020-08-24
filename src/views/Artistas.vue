<!--Vista de artistas, muestra grid con el resultado de los artistas devuelve la busqueda-->
<template>
  <v-container>
      <h1 class="text-center mt-2"></h1>
        <v-row no-gutter class="mt-5">
            <v-col cols="auto" v-for="item of artists" :key="item.uri">
              <router-link :to="`/albums/${item.id}`">
                <v-card max-width="200" class="mx-auto ">
                     <v-img 
                    height="200"
                    width="200"
                    :src = "`${item.images[0].url}`"
                    > 
                        <v-card-title>
                            
                        </v-card-title>
                    </v-img>
                    <v-card-text >
                        <div class="d-inline-block text-truncate white--text" style="max-width: 180px;">{{item.name}}</div>
                        
                    </v-card-text>
                    <v-card-actions>
                        
                    </v-card-actions>
                </v-card>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

import { mapState, mapActions} from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(['artists']) //importado luego de que se ha llenado para mostrar la grid
  },
  methods: {
    ...mapActions(['getToken','getArtists'])
  },
  created() {
    // this.getToken()
  },
}
</script>
