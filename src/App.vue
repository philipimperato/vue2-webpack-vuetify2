<template lang="pug">
  v-app
    vue-extend-layouts
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'

export default {
  name: 'App',
  components: { VueExtendLayouts }
}
</script>

<style>
  @import './assets/vuetify-overrides.css';
</style>
