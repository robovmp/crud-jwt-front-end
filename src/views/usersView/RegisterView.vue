<template>
  <div id="register">
    <form id="register-form">
      <div class="register-form-field">
        <label for="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          v-model="formRegister.name"
          required
          >
      </div>
      <div class="register-form-field">
        <label for="email">E-mail:</label>
        <input 
          type="email" 
          id="email" 
          v-model="formRegister.email"
          required
          >
      </div>
      <div class="register-form-field">
        <label for="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          v-model="formRegister.password"
          required
          >
      </div>
      <div class="register-form-field">
        <label for="checkpassword">Confirm password:</label>
        <input 
          type="password" 
          id="checkpassword" 
          v-model="formRegister.checkpassword"
          required
        >
      </div>
      <div id="register-form-field">
        <button @click.prevent="registerUser">Register</button>
      </div>

      
    </form>
  </div>
</template>
<script>
export default{
  data(){
    return{
      formRegister:{
        name:'',
        email:'',
        password:'',
        checkpassword:''
      }
    }
  },
  methods:{
    registerUser(){
      this.$http.post('/auth/register', this.formRegister)
        .then( 
          res => {
            console.log( res ) 
            this.$router.push('/auth/login')
          } 
        )
        .catch( 
          err =>{
            alert( err.response.data.msg )
          } 
        )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/colors';

#register{

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  &-form{
    width: 650px;
    height: 400px;
    border-radius: 15px;
    padding: 45px;
    background-color: $color-4 ;

    &-field{
      display: flex;
      justify-content: flex-end;
    
      button{
        justify-content: flex-end;
        margin: 20px 0;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 8px;
        padding: 10px;

        border: 0;
        background-color: $color-2;
        transition: .6s;
        
        box-shadow: 1px 1px 2px $color-1;

        &:hover{
          cursor: pointer;
          background-color: rgba($color: $color-1, $alpha: .8);
          color: $color-2;

          box-shadow: 1px 1px 2px $color-1;
        }
      }
    }
  }


}

.register-form-field{
  display: flex;
  flex-direction: column;

  label{
    margin: 10px 0;

    color: $color-2;
    font-weight: bold;

  
  
  }

  input{
    width: 100%;
    height: 30px;
    border-radius: 8px;
    box-shadow: 1px 1px 2px $color-1;

    font-weight: 500;
    font-size: 1rem;
    padding: 5px;

    &:focus{
      
      color: $color-1;
      background-color: $color-5;
    }
  }


}
</style>
