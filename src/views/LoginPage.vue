<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Login</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >Can't be empty</small
        >
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.email"
          >Must be an email!</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >Can't be empty!</small
        >
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.minLength"
          >Should be more than {{ $v.password.$params.minLength.min }}. There
          are {{ lastPasswordLength }} yet.
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { email, minLength, required } from 'vuelidate/lib/validators'
// import messages from '@/utils/messages'

@Component({
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
})
export default class LoginPage extends Vue {
  email = ''
  password = ''

  async submitHandler() {
    if (this.$v.$invalid) {
      this.$v.$touch()
      return
    }

    const body = {
      email: this.email,
      password: this.password,
    }

    try {
    } catch (e) {}
    console.log('LOGIN', this.$v.password.$params.minLength.min)
  }

  get lastPasswordLength() {
    return this.$v.password.$params.minLength.min - this.password.length
  }

  ////////////////////
  // name: 'login',
  //   data: () => ({
  //     email: '',
  //     password: '',
  //   }),
  //   validations: {
  //     email: { email, required },
  //     password: { required, minLength: minLength(6) },
  //   },
  //   computed: {
  //     lastLength() {
  //       return this.$v.password.$params.minLength.min - this.password.length
  //     },
  //   },
  //   mounted() {
  //     if (messages[this.$route.query.message]) {
  //       this.$message(messages[this.$route.query.message])
  //     }
  //   },
  //   methods: {
  //     async submitHandler() {
  //       if (this.$v.$invalid) {
  //         this.$v.$touch()
  //         return
  //       }
  //       const formData = {
  //         email: this.email,
  //         password: this.password,
  //       }
  //       console.log(formData)
  //       try {
  //         await this.$store.dispatch('login', formData)
  //         this.$router.push('/')
  //       } catch (e) {}
  //     },
  //   },
}
</script>
