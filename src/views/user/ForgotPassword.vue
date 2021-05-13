<template lang="pug">
  CommonCreateEditDialog(
    :isOpen="isOpen"
    @close="$emit('close')"
    :title="title"
    :valid="valid"
    action="Send Email"
  )
    v-form.pa-4.space-y-2(
      ref="form"
      lazy-validation
      v-model="valid"
      v-on:submit.prevent="login(save)"
    )
      v-text-field(
        label='Email Address'
        name='email'
        v-model="email"
        outlined
        dense
        autofocus
        type='text'
        :rules="[rules.required, rules.email]"
      )
</template>

<script>
import { ref } from '@vue/composition-api'
import validations from '@/mixins/validations'

export default {
  name: 'Register',
  mixins: [validations],
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
  },

  setup (props, { root }) {
    const email = ref('')

    return {
      email
    }
  }
}
</script>
