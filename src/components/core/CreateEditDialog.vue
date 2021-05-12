<template lang="pug">
  v-dialog(
    v-model="isOpen"
    :max-width="500"
    persistent
  )
    v-card
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
      v-card-text
        v-container
          slot
        v-card-actions
          v-btn(
            color="primary"
            depressed
            block
            large
            type="submit"
            @click="$emit('submit')"
            :disabled="!valid"
          ) {{ action }}

</template>

<script>
export default {
  name: 'CreateEditDialog',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    },
    valid: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      type: String,
      default: null,
      required: false
    },
    action: {
      type: String,
      default: 'Invite',
      required: false
    }
  }
}
</script>
