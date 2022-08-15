<template>
   <div id="posts">
        <nav id="posts-nav">
            <button @click.prevent="logout">Logout</button>
        </nav>
      <form id="posts-form">

          <label>Name:</label>
          <input type="text" placeholder="Name" v-model="posts.name" >
          <label>Area:</label>
          <input type="text" placeholder="Area" v-model="posts.area" >
          <label>Position:</label>
          <input type="text" placeholder="Position" v-model="posts.position" >
          <label>Remuneration:</label>
          <input type="text" placeholder="Remuneration" v-model="posts.remuneration" >
                   
          <button @click.prevent="salvar">Save</button>

      </form>

      <div id="posts-table">
            <div 
                v-for="render in renderPost" 
                :key="render._id"
                id="posts-table-content"
            >

            
            <h2>{{ render.name }}</h2>
            <div id="posts-table-content-infos">
                <p><strong>Area:</strong> {{ render.area }}</p>
                <p><strong>Position: </strong>{{ render.position }}</p>
                <p><strong>Remuneration: </strong>R$ {{ render.remuneration }}</p>
                
                <div id="posts-table-content-btns">
                    <button @click="editar(render)" ><i class="fa-solid fa-pen-to-square"></i></button>
                    <button @click="deletar(render)" style="background-color: red!important ;"><i class="fa-solid fa-square-minus"></i></button>
                </div>
                
            </div>

            </div>
      </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            posts:{
                _id: '',
                name: '',
                area: '',
                position: '',
                remuneration: ''

            },
        }
    },
    computed:{
        token(){
            return this.$store.getters.getToken
        },
        renderPost(){
            return this.$store.getters.getRenderPost
        }
    },
    mounted(){
        this.buscar()
    },
    methods:{
        salvar(){
            const config = {
                headers:{
                        'Authorization': `Bearer ${this.token}`
                }
            }

            if( !this.posts._id ){
                this.$http.post( 
                    'auth/post', 
                    this.posts,
                    config 
                )
                .then( 
                    res => {
                        alert( res.data.mensagem )
                        this.posts ={
                            id: '',
                            name: '',
                            area: '',
                            position: '',
                            remuneration: ''
                        }
                        this.buscar()
                    } 
                )
                .catch(
                    err =>{
                        alert ( err.response )
                    }
                )
            }else{
                this.$http.put( 
                    '/auth/post/:id', 
                    this.posts,
                    config 
                )
                .then( 
                    res => {
                        console.log(res)
                        this.posts ={
                            _id: '',
                            name: '',
                            area: '',
                            position: '',
                            remuneration: ''
                        }
                        this.buscar()
                    } 
                )
                .catch(
                    err =>{
                        console.log( err.response )
                    }
                )

            }

        },
        buscar(){
            const config = {
                headers:{
                    'Authorization': `Bearer ${this.token}`
                }
            }

            this.$http.get(
                '/auth/', 
                config
            )
            .then( 
                res => {
                    this.$store.dispatch( 'actionSetRenderPost', res.data )
                }
            )
            .catch(
            err =>{
                alert( err.response.data.msg )
            }
            )
        },
        editar(render){
            this.posts = render
        },
        deletar(render){
            const config = {
                headers:{
                    'Authorization': `Bearer ${this.token}`
                }
            }

            this.$http.delete( 
                    `/auth/post/${render._id}`,
                    config 
                )
                .then( 
                    res => {
                        alert( res.data.mensagem )
    
                        this.buscar()
                    } 
                )
                .catch(
                    err =>{
                        alert ( err.response )
                    }
                )

        },
        async logout(){
            await this.$store.dispatch( 'actionSetToken', null )
            localStorage.removeItem( 'token' )
            this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/colors';

#posts{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-nav{
        width: 100%;
        height: 70px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;

        background-color: $color-5;

        button{
            background-color: red;
            padding: 15px;
            border-radius: 8px;
            font-weight: bold;
            color: $color-2;

            &:hover{
                cursor: pointer;
            }
        }
    }

    &-form{
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 25px;
        border-radius: 10px;
        background-color: $color-5;
        margin-bottom: 20px;

        label{
            margin-bottom: 10px;
            font-weight: bold;
        }

        input{
            margin-bottom: 10px;
            height: 25px;
            padding: 10px;
            width: 100%;
            font-weight: bold;
        }

        button{
            width: 30%;
            font-weight: bold;
            font-size: 1rem;
            border-radius: 8px;
            background-color: $color-4;
            color: $color-2;
            padding: 10px;
            margin-top: 10px;

            &:hover{
                cursor: pointer;
            }
        }
    }

    &-table{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 25px;
        border-radius: 10px;
        background-color: $color-5;

        &-content{
            width: 40%;
            height: 50%;
            background-color: $color-2;
            padding: 20px;
            margin: 10px 10px;
            border-radius: 8px;
            border: 2px solid rgba($color: $color-1, $alpha: .5);

            display: flex;
            flex-direction: column;
            align-items: flex-start;

            h2{
                margin-bottom: 20px;
            }

            &-infos{
                width: 100%;
                p{
                    margin-bottom: 15px;
                }
            }

            &-btns{
                width: 100%;
                display: flex;
                justify-content: flex-end;

                button{
                    padding: 10px;
                    margin: 0 5px;
                    border-radius: 8px;
                    background-color: green;
                    
                    &:hover{
                        cursor: pointer;
                    }

                    svg{
                        color: $color-2;
                    }
                }
            }
        }
        
    }
}

@media (min-width: 320px) and (max-width: 480px){
    #posts-nav{
        height: 40px;
        padding: 12px;

        button{
            padding: 8px;         
        }
    }
  
    #posts-form{
    width: 100%;
    }

    #posts-table{
        &-content{
            width: 100%;
            height: 100%;
        }
    }
}

@media (min-width: 481px) and (max-width: 768px){
    #posts-nav{
        height: 60px;
        padding: 20px;

        button{
            padding: 10px;         
        }
    }
  
    #posts-form{
    width: 100%;
    }

    #posts-table{
        &-content{
            width: 80%;
            height: 100%;
        }
    
    }
}

@media (min-width: 768px) and (max-width: 1000px){
    #posts-form{
        width: 80%;
    }
    #posts-table{
        &-content{
            width: 90%;
            height: 100%;
        }
    
    }
}
  


</style>