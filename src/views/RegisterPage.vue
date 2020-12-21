<template>
  <form @submit.prevent="submitHandler" class="card auth-card">
    <div class="card-content">
      <span class="card-title">Registration</span>
      <div class="input-field">
        <input id="email" type="text" />
        <label for="email">Email</label>
        <small class="helper-text invalid">Cant be empty!</small>
        <small class="helper-text invalid">Must be an email!</small>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Cant be empty!</small>
        <small class="helper-text invalid">Should be more than </small>
      </div>
      <div class="input-field">
        <input id="name" type="text" class="validate" />
        <label for="name">Имя</label>
        <small class="helper-text invalid">Name</small>
      </div>
      <p>
        <label>
          <input type="checkbox" />
          <span>С правилами согласен</span>
          <!-- <span v-if="!$v.agree.required">U have to agree!</span> -->
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { email, required, minLength } from 'vuelidate/lib/validators'

@Component
export default class Registration extends Vue {
  // name = 'register'
  //   data: () => ({
  //     email: '',
  //     password: '',
  //     name: '',
  //     agree: '',
  //   }),
  //   validations: {
  //     email: { email, required },
  //     password: { minLength: minLength(6), required },
  //     name: { required },
  //     agree: { checked: v => v },
  //   },
  //   computed: {
  //     lastLength() {
  //       return this.$v.password.$params.minLength.min - this.password.length
  //     },
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
  //         name: this.name,
  //       }
  //       try {
  //         await this.$store.dispatch('register', formData)
  //         this.$router.push('/')
  //       } catch (e) {}
  //     },
  //   },
}
</script>
