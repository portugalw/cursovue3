<template>
    <div id="burger-table">
        <div>
            <div id="burger-table-heading">
                <div class="order-id">#:</div>
                <div>Cliente:</div>
                <div>Pão:</div>
                <div>Carne:</div>
                <div>Opcionais:</div>
                <div>Ações:</div>
            </div>
            <div id="burger-table-rows">
                <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
                    <div class="order-number">{{burger.id}}</div>
                    <div>{{burger.nome}}</div>
                    <div>{{burger.pao}}</div>
                    <div>{{burger.carne}}</div>
                    <div>
                        <ul>
                            <li v-for="(opcional, index) in burger.opcionais" :key="index">{{opcional}}</li>
                        </ul>
                    </div>
                    <div>
                        <select name="status" class="status" @change="updateBurger($event, burger.id)">
                            <option :value="status.tipo" v-for="status in statusData" :key="status.id" :selected="burger.status == status.tipo">
                                {{status.tipo}}
                            </option>
                        </select>
                        <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'Dashboard',
        data(){
            return {
                burgers : null,
                burgerId : null,
                statusData: []
            }
        },
        methods: {
            async getPedidos() {
                const req = await fetch("http://localhost:3000/burgers");
                const data = await req.json();
                this.burgers = data;
            },
            async getStatus() {
                const req = await fetch("http://localhost:3000/status");
                const data = await req.json();
                this.statusData = data;
            },
            async deleteBurger(burgerId){
                const req = await fetch(`http://localhost:3000/burgers/${burgerId}`, {
                    method: 'DELETE'
                } );

                const res = await req.json();
                this.getPedidos();
            },
            async updateBurger(event, burgerId){
                const option = event.target.value;
                const dataJson = JSON.stringify({ status : option});
                const req = await fetch(`http://localhost:3000/burgers/${burgerId}`, {
                    method: 'PATCH',
                    headers: {"Content-Type" : "application/json"},
                    body: dataJson
                } );

                const res = await req.json();
                console.log(res);
            }
        },
        mounted() {
            this.getPedidos();
            this.getStatus();
        }
    }
</script>

<style scoped>
    #burger-table{
        max-width: 1200px;
        margin: 0 auto;
    }

    #burger-table-heading,
    #burger-table-rows,
    .burger-table-row{
        display: flex;
        flex-wrap: wrap;
    }

    #burger-table-heading {
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #333;
    }

    #burger-table-heading div,
    .burger-table-row div {
        width: 19%;
    }

    .burger-table-row {
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #CCC;
    }
    
    #burger-table-heading .order-id,
    .burger-table-row .order-number {
        width: 5%;
    }

    select {
        padding: 12px 6px;
        margin-right: 12px;
    }

    .delete-btn{
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        font-size: 16px ;
        padding: 10px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
        margin-top: 5px;
    }

     .delete-btn:hover{
        background-color: transparent;
        color: black;
       
    }

</style>