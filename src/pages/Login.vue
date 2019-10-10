<template>
  <div id="form" class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Your username *"
        hint="username login data"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />


      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password don't let anyone know it">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-toggle v-model="accept" label="I accept the license and terms" />
      <hr>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn label="register" type="register" color="primary" flat class="q-ml-sm" to="Register"/>
      </div>
    </q-form>

  </div>
</template>

<style scoped>

#form {
    margin-left: 40%;
    
    margin-top: 10%;   
    border: 15px solid rgb(227, 2, 70);
}

</style>

<script>
import login_api from '../api/Login/index'
export default {
  data () {
    return {
      username: "",
      password: "",
      isPwd: true,

      accept: false
    }
  },

  methods: {
    onSubmit () {
        let self = this;
        login_api
            .userLogin(window, self.username, self.password)
            .then(function(result){
                console.log(result)
                if (result){
                    self.$router.push("/");
                }
            })
            .catch(function(err){
                console.log(err)
            });
    
      }
    },

    onReset () {
      this.username = null
      this.password = null
      this.accept = false
    },
  }

</script>