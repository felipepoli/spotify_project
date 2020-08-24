<!--Vista principal, muestra grid con el resultado de los releases que devuelve la api-->
<template>
    <v-container>
      <h1 class="text-center mt-2 mb-5">#LoNuevo</h1>
        <v-row class="mt-5">
            <v-col cols="auto" v-for="item of Albums" :key="item.uri">
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
                        <div class="caption">{{item.artists[0].name}}</div>
                    </v-card-text>
                    <v-card-actions>
                        
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
  name: 'Inicio',
 
  methods: {
      ...mapActions(['getToken'])  //para que se ejecute cada vez que inicie la pagina
  },
  computed: {
      ...mapState(['Albums'])    //para llenar la grid
  },
  created() {
      this.getToken() 
      
  },

}
</script>
