<template>
  <img :src="avatar" :alt="descricao" class="imagemPerfil">
  <MudarImagem @mudar-imagem="trocaImagemPerfil"/>
</template>
<script>

import MudarImagem from './MudarImagem.vue'

export default {
  name: 'Picture',
  components: {
    MudarImagem
  },
  data() {
    return { 
      avatar: "/img/avatar.png",
      descricao: "Washington"
    }
  },
  methods : {
    trocaImagemPerfil () {
      if(this.avatar == "/img/avatar.png"){
        this.avatar = "/img/avatar2.png";
      }
      else{
        this.avatar = "/img/avatar.png";
      }
    }
  }
}
</script>

<style scoped>
.imagemPerfil {
  width: 150px;
}

</style>