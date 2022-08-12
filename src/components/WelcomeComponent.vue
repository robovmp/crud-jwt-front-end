<template>
    <div id="welcome">
        <div id="welcome-box">
            <h1>Welcome</h1>
            <p>
                This is a simple CRUD project about professions, aiming at the study of JWT.
                Powered by Vue.js, Node.js and MongoDB. Using helper technologies like Vuex, Axios, JWT, and express.
            </p>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import '../assets/scss/colors';

#welcome{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &-box{
        width: 650px;
        height: 350px;
        padding: 30px;

        background-color: rgba($color: $color-4, $alpha: .8);
        color: rgba($color: $color-1 , $alpha: .9);
        border-radius: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1{
            margin-bottom: 40px;
            
            border-bottom: 2px solid $color-2;
        }
        p{
            font-weight: 500;
            text-align: justify;
            line-height: 1.5rem;
        }
    }

}
</style>