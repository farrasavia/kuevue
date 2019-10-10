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

       <q-input
        filled
        v-model="email"
        label="Your email *"
        hint="email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />


      <q-toggle v-model="accept" label="I accept the license and terms" />
      <hr>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn label="Cancel" type="cancel" color="primary" flat class="q-ml-sm" to="Login"/>
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
export default {
  data () {
    return {
      name: null,
      email: null,
      password: '',
      isPwd: true,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.username = null
      this.password = null
      this.accept = false
    },
  }
}
</script>