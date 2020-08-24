<!--contiene el componente album, para crear ruta dinamica-->
<template>
   <v-container mt-5>
        <Album></Album>
        
    </v-container>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import  Album from '@/components/Album.vue'
export default {
    components:{
        Album
    },
    computed: {
    },
    methods: {
    },
    created() {
        
    },

  }
    

</script>