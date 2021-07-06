<template>
  <div>
    <div class="row">
      <div
        class="col-sm-6"
        :key="equipo.id"
        v-for="(equipo, indexEquipo) of equipos"
      >
        <div class="card">
          <div class="alert alert-danger text-center" role="alert">
            {{ equipo.nombre }}
          </div>
          <div class="card-body text-center">
            <span class="badge rounded-pill bg-danger">
              <h1>{{ equipo.totalFaltas }}</h1></span
            >

            <table class="table table-danger">
              <thead>
                <tr>
                  <th scope="col">Numero</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Faltas</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  :key="jugador.id"
                  v-for="(jugador, indexJugador) of equipo.jugador"
                >
                  <th scope="row">{{ jugador.numeroJugador }}</th>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      href="#"
                      @click="
                        aumentarFalta({
                          numeroId: indexEquipo,
                          numeroJugador: indexJugador,
                          nombreEquipo: equipo.nombre
                        })
                      "
                    >
                      {{ jugador.nombreJugador }}
                    </button>
                  </td>
                  <td>{{ jugador.faltas }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "faltas",
  computed: {
    ...mapState(["equipos"]),
  },
  methods: {
    ...mapMutations(["aumentarFalta"]),
  },
};
</script>