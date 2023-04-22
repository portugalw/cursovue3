<template>
    <div>
        <h2>Formulário</h2>
        <form action="/" @submit="enviarFormulario($event)">
            <input type="text" v-model="nome">
            <input type="text" v-model="email">
            
            <Submit/>
        
        
        </form>
    </div>
</template>
<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'

export default {
    name: 'Form',
    components : {
        InputText,
        Submit
    },
    data(){
        return {
            name : '',
            email: ''
        }
    },
    methods :{
        enviarFormulario (e){

            e.preventDefault();
            

            console.log('Nome ' + this.nome);
            console.log('Email ' + this.email);
        }
    }
  }
</script>