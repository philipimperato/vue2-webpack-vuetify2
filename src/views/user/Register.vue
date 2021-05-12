<template lang="pug">
  v-dialog(
    v-model="isOpen"
    :max-width="500"
    persistent
  )
    v-toolbar(
      color="primary"
      dark
      flat
    )
      v-toolbar-title {{ title }}
      v-spacer
      v-btn(
        icon
        @click="$emit('close')"
      )
        v-icon mdi-close
    div.pa-4.bg-white
      
    v-toolbar
      v-spacer
      v-btn.mr-4(
        large
        @click="$emit('close')"
        color="white"
        depressed
      ) Cancel
      v-btn(
        large
        color="primary"
        depressed
      ) Save
</template>

<script>
export default {
  name: 'Register',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      type: String,
      default: null,
      required: false
    }
  }
}
</script>
