<template>
  <v-app class="red">
    <Appbar></Appbar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from '@/components/Appbar.vue'

export default {
  name: 'App',

  components: {
    Appbar

  },

  data: () => ({
    //
  }),
};
</script>
