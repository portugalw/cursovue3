<template>
    <div>
        <h1>Monte seu burger</h1>
        <Message :msg="msg" v-show="msg" />
        <div>
            <form  id="burger-form" @submit="createBurger">
                <div class="input-container">
                    <label for="nome" >Nome do cliente:</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
                </div>
                <div class="input-container">
                    <label for="pao" >Escolha seu pão:</label>
                    <select id="pao" name="pao" v-model="pao">
                        <option value="">Selecione o pão</option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
                            {{pao.tipo}}
                        </option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="carne" >Escolha carne:</label>
                    <select id="carne" name="carne" v-model="carne">
                        <option value="">Selecione carne</option>
                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
                            {{carne.tipo}}
                        </option>
                    </select>
                </div>
                <div id="opcionais-container" class="input-container">
                    <label id="opcionais-title" for="opcionais" >Selecione opcionais:</label>
                    <div  class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
                        <input type="checkbox" name="opcionais" :value="opcional.tipo" v-model="opcionais">
                        <span>{{opcional.tipo}}</span>
                    </div>
                    
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar burger " >
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Message from './Message.vue';

    export default{
        name: 'BurgerForm',
        components: {
            Message
        },
        data() {
            return {
                nome:null,
                paes: null,
                carnes: null,
                opcionaisdata:null,
                pao: "",
                carne: "",
                opcionais: [],
                status : "Solicitado",
                msg: null

            }
        },
        methods: {
            async getIngredientes() {
                const req = await fetch("http://localhost:3000/ingredientes");
                const data = await req.json();
                
                this.paes = data.paes;
                this.carnes = data.carnes;
                this.opcionaisdata = data.opcionais;
            },
            async createBurger(e){
                e.preventDefault();


                const data = {
                    nome: this.nome,
                    carne: this.carne,
                    pao: this.pao,
                    opcionais: Array.from(this.opcionais),
                    status:  this.status
                };

                const dataJson = JSON.stringify(data);
                const req = await fetch("http://localhost:3000/burgers", {
                    method: 'POST',
                    headers: { "Content-Type" : "application/json"},
                    body: dataJson
                } );

                const res = await req.json();
                
                if(res.id){
                    this.msg = `Pedido Nº ${res.id} do(a) ${res.nome} criado com sucesso!`;
                }else{
                    this.msg = `Erro ao criar pedido!`;
                }
                
                this.limparCampos();
            },
            limparCampos(){
                this.nome = "";
                this.carne = "";
                this.pao = "";
                this.opcionais = []; 

                setTimeout(() => {
                    this.msg = null;
                }, 3000);

            }
        },
        mounted(){
            this.getIngredientes();
        }
    }
</script>

<style scoped>
    #burger-form {
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px ;
        border-left: 4px solid #FCBA03;
    }

    input, select {
        padding: 5px 10px;
        width: 300px;
    }
    #opcionais-container{
        flex-direction: row;
        flex-wrap: wrap;
    }
    #opcionais-title{
        width:100% ;
    }

    .checkbox-container{
        display: flex;  
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }

    .checkbox-container span,
    .checkbox-container input{
        width: auto;
    }

    .checkbox-container span{
       margin-left: 6px;
        font-weight: bold;
    }

    .submit-btn{
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

     .submit-btn:hover{
        background-color: #FFF;
        color: black;
       
    }

</style>