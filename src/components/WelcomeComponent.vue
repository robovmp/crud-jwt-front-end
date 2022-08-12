<template>
    <div id="welcome">
        <div id="welcome-box">
            <h1>Welcome</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur iste natus et ab qui beatae, recusandae velit ratione vel a reiciendis tenetur fugiat non quasi maxime. Facere, beatae rem?
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
        }
    }

}
</style>