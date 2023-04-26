<template>
  <h1>Meu nome é {{ nome }}</h1>
  <Info compEmail="teste@ingo.comn" />
</template>

<script>
import Info from './Info.vue'

export default {
  name: 'LifeCycle',
  components: {
    Info
  },
  data() {
    return { 
      nome: "Ainda não sei"
    }
  },
  created() {
    this.nome = "Washington"
  }
}
</script>