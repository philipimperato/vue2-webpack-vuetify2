<template lang="pug">
  CommonCreateEditDialog(
    :isOpen="isOpen"
    @close="$emit('close')"
    :title="title"
    :valid="valid"
    action="Register"
  )
    FeathersVuexFormWrapper( :item="newUser" )
      template( v-slot="{ clone, save }" )
        v-form.pa-4.space-y-2(
          ref="form"
          v-model="valid"
          v-on:submit.prevent="login(save)"
        )
          v-text-field(
            label='Email Address'
            name='email'
            v-model="clone.email"
            outlined
            dense
            autofocus
            type='text'
            :rules="[rules.required, rules.email]"
          )
          v-text-field(
            label='Password'
            outlined
            dense
            v-model="clone.password"
            name='password'
            type='password'
            :rules="[rules.required, rules.isFourCharacters, rules.confirmPassword(clone)]"
          )
          v-text-field(
            label='Confirm Password'
            outlined
            dense
            v-model="clone.confirmPassword"
            name='confirm-password'
            type='password'
            :rules="[rules.required, rules.isFourCharacters, rules.confirmPassword(clone)]"
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
    const { User } = root.$FeathersVuex.api
    const newUser = new User({ confirmPassword: '' })
    const valid = ref(false)

    return {
      valid,
      newUser
    }
  }
}
</script>
