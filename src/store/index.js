import Vue from 'vue'
import Vuex from 'vuex'
import Timer from 'timer.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    equipos:[
      {idEquipo:"1",nombre:'Local',jugador:[
        {numeroJugador:"5",nombreJugador:"Manuel",puntos:0,faltas:0},
        {numeroJugador:"15",nombreJugador:"Jose",puntos:0,faltas:0},
        {numeroJugador:"25",nombreJugador:"Raul",puntos:0,faltas:0},
        {numeroJugador:"35",nombreJugador:"Jose",puntos:0,faltas:0},
        {numeroJugador:"45",nombreJugador:"mauricio",puntos:0,faltas:0},
      ], totalPuntos:0, totalFaltas:0},
      {idEquipo:"2",nombre:'Visitante',jugador:[
        {numeroJugador:"3",nombreJugador:"Noe",puntos:0,faltas:0},
        {numeroJugador:"8",nombreJugador:"Omar",puntos:0,faltas:0},
        {numeroJugador:"32",nombreJugador:"Andres",puntos:0,faltas:0},
        {numeroJugador:"45",nombreJugador:"Victor",puntos:0,faltas:0},
        {numeroJugador:"65",nombreJugador:"Miguel",puntos:0,faltas:0}
      ], totalPuntos:0, totalFaltas:0}
    ],
    puntosAnotaciones:[ 
            {valorPuntos:1},
            {valorPuntos:2},
            {valorPuntos:3}
    ],
    faltasLocal:[],
    faltasVisitante:[],
    listadoPuntosAnotadosLocal:[],
    listadoPuntosAnotadosVisitante:[],
    periodo:0,
    horas:0,
    minutos:0,
    segundos:0
  }
 ,

  mutations: {
    //aumentamos las faltas dependiendo del Jugador
    aumentarFalta(state, numero){
    state.equipos[numero.numeroId].jugador[numero.numeroJugador].faltas++

      state.equipos[numero.numeroId].totalFaltas++
   },
    //aumentamos los puntos anotados dependiendo del jugador
    anotaciones(state,anotaciones){
    
      state.equipos[anotaciones.idEquipo].jugador[anotaciones.idJuagador].puntos = state.equipos[anotaciones.idEquipo].jugador[anotaciones.idJuagador].puntos +anotaciones.idAnotacion;
      state.equipos[anotaciones.idEquipo].totalPuntos = state.equipos[anotaciones.idEquipo].totalPuntos + anotaciones.idAnotacion;
     
      if( anotaciones.equipoNombre == "Local"){
        state.listadoPuntosAnotadosLocal.push({
          equipo:anotaciones.equipoNombre,
          jugadorAnotacion:[
            {
              numeroAnotador: state.equipos[anotaciones.idEquipo].jugador[anotaciones.idJuagador].numeroJugador,
              nombreAnotador: state.equipos[anotaciones.idEquipo].jugador[anotaciones.idJuagador].nombreJugador,
              AnotacionRealizada: anotaciones.idAnotacion
            }
          ]
        })
      }else{
        state.listadoPuntosAnotadosVisitante.push({
          equipo:anotaciones.equipoNombre,
          jugadorAnotacion:[
            {
              numeroAnotador: state.equipos[anotaciones.idEquipo].jugador[anotaciones.idJuagador].numeroJugador,
              nombreAnotador: state.equipos[anotaciones.idEquipo].jugador[anotaciones.idJuagador].nombreJugador,
              AnotacionRealizada: anotaciones.idAnotacion
            }
          ]
        })
      }
     
    },
    consulta(){
      var timer = new Timer()
    }
  },
  actions: {
  },
  modules: {
  }
})
