<template>
  <v-app>
    <v-main>
      <TopPage></TopPage>
    </v-main>
  </v-app>
</template>

<script>
import TopPage from './components/TopPage.vue'

export default {
  name: 'App',

  components: {
    TopPage,
  },

  data: () => ({
    //
  }),
}
</script>
