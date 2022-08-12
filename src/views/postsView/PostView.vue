<template>
   <div id="posts">
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

      <table id="posts-table">

        <thead>

          <tr>
            <th>NAME</th>
            <th>AREA</th>
            <th>POSITION</th>
            <th>REMUNERATION</th>
            <th>OPTIONS</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="render in renderPost" :key="render._id">

            <td>{{ render.name }}</td>
            <td>{{ render.area }}</td>
            <td>{{ render.position }}</td>
            <td>R$ {{ render.remuneration }}</td>
            <td>
              <button @click="editar(render)" >Edit</button>
              <button @click="deletar(render)" style="background-color: red!important;">Remove</button>
            </td>

          </tr>

        </tbody>
      
      </table>

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
            // renderPost: []
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
                        // console.log( res.data.mensagem )
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
                        alert( res.data.mensagem )
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
                        alert ( err.response )
                        console.log(err)
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
            console.log( render._id )
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
                        console.log(err)
                    }
                )

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
    padding: 20px;


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
        display: flex;
        flex-direction: column;
        padding: 25px;
        border-radius: 10px;
        background-color: $color-5;
        margin-bottom: 20px;

        thead{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            tr{
                width: 100%;

                display: flex;
                justify-content: space-around;
                
                th{
                    background-color: $color-4;
                    padding: 10px;
                    border-radius: 8px;
                    color: $color-2;
                }
            }
        }

        tbody{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            font-weight: bold;
            tr{
                width: 100%;
                display: flex;
                justify-content: space-around;

                td{
                    
                    border-radius: 8px;

                    margin: 10px 0px;
                    align-items: start;

                    button{
                        margin-left: 40px;
                        padding: 10px;
                        background-color: green;
                        border-radius: 8px;
                        font-weight: bold;
                        color: $color-2;

                        &:hover{
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
}
</style>