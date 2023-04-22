<template>
    <div>
      
      <input type="submit" v-model="texto">
    </div>
  </template>
  <script>
  
  export default {
    name: 'Submit',
    data() {
      return { 
        texto: 'Enviar',
      }
    }
  }
  </script>