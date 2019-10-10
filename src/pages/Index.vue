<template>
  <q-page class="flex flex-center">
    <button @click="clearMessage">Clear</button>
    <input v-model="message" @keyup="handleKeyup" @keydown="handleKeydown"/>
    <h1>{{message}}</h1>
    <img alt="Quasar logo" src="~assets/BL.jpg">
  </q-page>
</template>

<script>
export default {
  data() {
    return{
  message : 'Halo Selamat Pagi'
    }

  },
  methods:{
    clearMessage(){
      this.message=''
    },
    handleKeydown(e){
      if (e.keyCode == 27){
        this.message='ESC'
      }
    },
    handleKeyup(e){
      if (e.keyCode==13){
        this.message='ENTER'
      }
    }
  }
  // name: 'PageIndex'
}

</script>
