<template>
  <div>
    <Header />
    <PrimeiroComponente />
    <LifeCycle />
    <Form />
  </div>
</template>

<script>
import Header from './components/Header'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Header,
    Form
  }
}
</script>

<style>
  body {
    background-color: #333;
    color: #FFF;
  }
</style>