<template>
  <div class="container" id="app">
    <cronometro></cronometro>
    <puntaje></puntaje>
    <faltas></faltas>
    <lista-anotaciones></lista-anotaciones>
   
  </div>
</template>

<script>

import cronometro from './components/Cronometro.vue';
import puntaje from './components/Puntaje.vue';
import faltas from './components/Faltas.vue';
import listaAnotaciones from './components/listaAnotaciones.vue'
import listaFaltas from './components/listaFaltas.vue'


export default {
  name: 'App',
  components: {
    cronometro,
    puntaje,
    faltas,
    listaAnotaciones,
    listaFaltas
  }
}
</script>
