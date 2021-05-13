export default {
  data () {
    return {
      valid: false,
      rules: {
        required: value => !!value || 'Required',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return (!value || pattern.test(value)) || 'Invalid e-mail'
        },
        isPositiveNumber: value => {
          const pattern = /^[+]?\d+([.]\d+)?$/
          return (!value || pattern.test(value)) || 'Must be a positive Number'
        },
        isNumber: value => {
          const pattern = /^\d+$/
          return (!!value || pattern.test(value)) || 'Must be a Number'
        },
        isMatch: v => (!!v && v) === this.match || 'Values do not match',
        isFourCharacters: v => v.length >= 4 || 'Must be at least 4 characters',
        includesNumber: value => {
          const pattern = /\d/
          return (!value || pattern.test(value)) || 'Must include a number'
        },
        confirmPassword: c => c.password === c.confirmPassword || 'Passwords do not match',
        includesSymbol: value => {
          const pattern = /[$@#%&+=*-/:-?{-~!"^_`[\]]/
          return (!value || pattern.test(value)) || 'Must include a symbol'
        },
        includesUppercase: value => {
          const pattern = /[A-Z]/
          return (!value || pattern.test(value)) || 'Must include an uppercase letter'
        },
        includesLowercase: value => {
          const pattern = /[a-z]/
          return (!value || pattern.test(value)) || 'Must include a lowercase letter'
        },
        isPhoneNumber: value => {
          const pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
          return (!value || pattern.test(value)) || 'Must be a valid phone number'
        }
      }
    }
  }
}
