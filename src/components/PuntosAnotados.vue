<template>
  <div>
    <div class="dropdown text-center">
      <a
        class="btn btn-warning dropdown-toggle" href="#" role="button" id="dropdownMenuLink1"
        data-bs-toggle="dropdown" aria-expanded="false">
        1
      </a>

      <ul
        class="dropdown-menu"
        aria-labelledby="dropdownMenuLink1"
        :key="indexJugador"
        v-for="(jugador, indexJugador) of ListaJugadores"
      >
        <li>
          <button
            class="dropdown-item"
            href="#"
            :key="indexUnico"
            v-for="(unico, indexUnico) of jugador"
          >
          <button class="btn btn-outline-dark" type="button"
          @click="anotaciones({
            idEquipo:idEquipo,
            idJuagador: indexUnico,
            idAnotacion:1,
            equipoNombre: nombreEquipo,
            
            })"
          >
              {{ unico.numeroJugador }} - {{ unico.nombreJugador }} - {{unico.puntos}}</button>
            
          </button>
        </li>
      </ul>

     <a
        class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink2"
        data-bs-toggle="dropdown" aria-expanded="false">
        2
      </a>

      <ul
        class="dropdown-menu"
        aria-labelledby="dropdownMenuLink2"
        :key="indexJugador"
        v-for="(jugador, indexJugador) of ListaJugadores"
      >
        <li>
          <button
            class="dropdown-item"
            href="#"
            :key="indexUnico"
            v-for="(unico, indexUnico) of jugador"
          >
          <button class="btn btn-outline-dark" type="button"
          @click="anotaciones({idEquipo:idEquipo, idJuagador: indexUnico, idAnotacion:2, equipoNombre: nombreEquipo,})"
          >
              
              {{ unico.numeroJugador }} - {{ unico.nombreJugador }} - {{unico.puntos}}</button>
            
          </button>
        </li>
      </ul>
 <a
        class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink3"
        data-bs-toggle="dropdown" aria-expanded="false">
        3
      </a>

      <ul
        class="dropdown-menu"
        aria-labelledby="dropdownMenuLink3"
        :key="indexJugador"
        v-for="(jugador, indexJugador) of ListaJugadores"
      >
        <li>
          <button
            class="dropdown-item"
            href="#"
            :key="indexUnico"
            v-for="(unico, indexUnico) of jugador"
          >
          <button class="btn btn-outline-dark" type="button"
          @click="anotaciones({idEquipo:idEquipo, idJuagador: indexUnico, idAnotacion:3, equipoNombre: nombreEquipo,})"
          >
              
              {{ unico.numeroJugador }} - {{ unico.nombreJugador }} - {{unico.puntos}}</button>
            
          </button>
        </li>
      </ul>
    </div>





  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "puntosAnotados",
  props: {
    idEquipo: Number,
    nombreEquipo: String,
    ListaJugadores: Array,
  },
  methods: {
    ...mapMutations(["anotaciones"]),
  },
  computed: {
    ...mapState(["puntosAnotaciones"],["totalFaltas"]),
  },
};
</script>
