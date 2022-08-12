<template>
  <div id="app">
    <div id="app-page-auth" v-if="this.token == null ">
      <ComponentLogin id="app-page-auth-component-login" />
    </div> 
    <div id="app-page-crud" v-else>
      <ComponentHome />
    </div>
  </div>
</template>
<script>
import ComponentLogin from './components/ComponentLogin.vue';
import ComponentHome from './components/ComponentHome.vue';
export default{
  components:{
    ComponentLogin,
    ComponentHome
},
  data(){
    return{
      // token: this.$store.getters.getToken
    }
  },
  computed:{
    token(){
      return this.$store.getters.getToken
    }
  },
  created(){
    const tokenLocalStorage = localStorage.getItem( 'token' )
    this.$store.dispatch( 'actionSetToken', tokenLocalStorage )
  }

}
</script>
<style lang="scss" scoped>
#app{
  width: 100%;
  height: 100%;

  &-page-auth{
    width: 100%;
    height: 100%;
  }
}


</style>
