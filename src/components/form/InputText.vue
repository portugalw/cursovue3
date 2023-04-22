<template>
    <div>
      <label>{{ labelInput }}</label>
      <input type="text" v-model="valorInput" >
    </div>
  </template>
  <script>
  
  export default {
    name: 'InputText',
    data() {
      return { 
        labelInput: 'label',
        valorInput: '545454'
      }
    }
  }
  </script>