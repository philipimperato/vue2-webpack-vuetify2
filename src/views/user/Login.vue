<template lang="pug">
  v-container.fill-height( fluid='' )
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
            a.font-medium.text-indigo-600(
              @click="isRegisterDialogOpen = true"
              class='hover:text-indigo-500'
            ) register for an account
        Register(
          title="Register an account"
          :isOpen="isRegisterDialogOpen"
          @close="isRegisterDialogOpen = false"
        )
        v-card( elevation="2" )
          v-card-text
            v-form.pa-4(
              lazy-validation
              ref="form"
              v-model="valid"
              v-on:submit.prevent="login(save)"
            )
              //- v-sheet.pa-4.mb-6(
              //-   v-if="loginError"
              //-   color="error lighten-2"
              //- )
              //-   h3.text-center {{ loginError }}
              v-text-field(
                label='Email Address'
                name='email'
                v-model="userLogin.email"
                outlined
                type='text'
                :rules="[rules.required, rules.email]"
              )
              v-text-field(
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
                a( @click="isForgotPasswordDialogOpen = true" ) Forgot password?
              ForgotPassword(
                title="Reset your password"
                :isOpen="isForgotPasswordDialogOpen"
                @close="isForgotPasswordDialogOpen = false"
              )

</template>

<script>
import { ref } from '@vue/composition-api'
import validations from '@/mixins/validations'
import Register from '@/views/user/Register'
import ForgotPassword from '@/views/user/ForgotPassword'

export default {
  name: '',
  components: {
    Register,
    ForgotPassword
  },
  mixins: [validations],
  setup () {
    const isRegisterDialogOpen = ref(false)
    const isForgotPasswordDialogOpen = ref(false)
    const valid = ref(false)
    const sendingLogin = ref(false)
    const userLogin = ref({
      email: '',
      password: ''
    })

    return {
      userLogin,
      sendingLogin,
      valid,

      isRegisterDialogOpen,
      isForgotPasswordDialogOpen
    }
  }
}
</script>
