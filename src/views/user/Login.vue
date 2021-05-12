<template lang="pug">
  v-container.fill-height(fluid='')
    v-row(
      align='center'
      justify='center'
    )
      v-col(
        cols='12'
        sm='8'
        md='6'
        lg='4'
        :class="{ 'px-0' : $vuetify.breakpoint.smAndDown }"
      )
        div.mx-auto.mb-12
          h2.mt-6.text-center.text-4xl.font-extrabold.text-gray-900
            | Sign in to your account
          p.mt-2.text-center.text-sm.text-gray-600
            | Or &nbsp;
            a.font-medium.text-indigo-600(href='#', class='hover:text-indigo-500')
              | register for an account
        v-card( elevation="2" )
          v-card-text
            v-form.pa-4(
              lazy-validation
              ref="form"
              v-model="valid"
              v-on:submit.prevent="login"
            )
              v-sheet.pa-4.mb-6(
                v-if="loginError"
                color="error lighten-2"
              )
                h3.text-center {{ loginError }}
              v-text-field(
                label='Email Address'
                name='email'
                v-model="userLogin.email"
                outlined
                type='text'
                :rules="[rules.required, rules.email]"
              )
              v-text-field#password(
                label='Password'
                outlined
                v-model="userLogin.password"
                name='password'
                type='password'
                :rules="[rules.required]"
              )
              v-btn(
                block
                depressed
                color="primary"
                large
                type="submit"
                :disabled="!valid"
                :loading="sendingLogin"
              ) Login

              .mt-4.text-left
                router-link( to="forgot-password" ) Forgot password?
</template>

<script>
import validations from '@/mixins/validations'

export default {
  name: '',
  data: () => ({
    valid: true,
    loginError: false,
    sendingLogin: false
  }),
  mixins: [validations],
  methods: {
    userLogin () {}
  }
}
</script>

<style>
</style>
