<template lang="pug">
  v-dialog(
    v-model="isOpen"
    :max-width="500"
    persistent
  )
    v-toolbar(
      flat
      dense
    )
      v-toolbar-title {{ title }}
      v-spacer
      v-btn.outline-none(
        icon
        @click="$emit('close')"
      )
        v-icon mdi-close
    v-container.bg-gray-50.border-t.border-b.pt-8.pb-4.px-6
      slot
    v-toolbar(
      color="white"
      flat
    )
      v-spacer
      v-btn.mr-2(
        color="secondary"
        depressed
        @click="$emit('close')"
      ) Cancel
      v-btn(
        color="primary"
        depressed
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
