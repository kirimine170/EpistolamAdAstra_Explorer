<template>
  <v-app>
    <v-main>
      <navigationBar></navigationBar>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import navigationBar from '@/components/utils/NavigationBar.vue'

export default {
  name: 'App',

  components: {
    navigationBar,
  },

  data: () => ({
    //
  }),
}
</script>
