<!--Vista de canciones, muestra grid con el resultado de las canciones que devuelve la busqueda-->
<template>
    <v-container>
      <h1 class="text-center mt-2">Canciones Encontradas</h1>
        <v-row class="mt-5">
            <v-col cols="auto" v-for="item of songs" :key="item.uri">
                
                <v-card max-width="200" class="mx-auto ">
                    <v-img 
                    height="200"
                    width="200"
                    :src = "`${item.album.images[0].url}`"
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
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
//
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['songs']) //importado luego de que se ha llenado para mostrar la grid
    },
    methods: {
        
    },
    created() {
        
    },
}
</script>