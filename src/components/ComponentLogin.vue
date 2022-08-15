<template>
    <div id="component-login">
        <nav id="component-login-nav"  >
            <router-link to='/auth/register' @click.native="increment">Register</router-link>
            <router-link to='/auth/login' @click.native="increment" >Login</router-link>
        </nav>
        <div id="component-login-welcome" v-if="this.pages == 0">
            <WelcomeComponent/>
        </div>
        <div id="component-login-view" v-else>
            <router-view />
        </div>
        
    </div>
</template>
<script>
import WelcomeComponent from "./WelcomeComponent.vue";
export default {
    data() {
        return {
            pages: 0
        };
    },
    methods: {
        increment() {
            this.pages = this.pages + 1;
        }
    },
    components:{ 
        WelcomeComponent
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/colors';

#component-login{
    background-color: $color-3;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;
    &-nav{

        width: 100%;
        height: 10vh;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: $color-3;

        a{
            text-decoration: none;
            margin: 0 20px;
            padding: 10px;
            border-radius: 10px;
            font-weight: bold;
            color: $color-1;
            transition: .5s;

            &:hover{
                background-color: $color-4;
                color: $color-2;
            }
        }


    }

    &-view, &-welcome{
        width: 100%;
        height: 90vh;
    }
}

@media (min-width: 320px) and (max-width: 480px){
  #component-login-welcome, #component-login-view{
    padding: 20px;
  }

}

@media (min-width: 481px) and (max-width: 768px){
    #component-login-welcome, #component-login-view{
        padding: 20px;
    }
}


</style>