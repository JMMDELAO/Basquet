
<template>
     <div class="row">
            <div class="col-sm-6" :key="equipo.id" v-for="(equipo, indexEquipo)  of equipos">
                <div class="card-header text-center alert-dark">
                   {{equipo.nombre}}
                </div>
                <div class="card">
                    <div class="alert alert-primary text-center" role="alert">
                        Puntos


                        
                    </div>
                    <div class="card-body">
                        <h3 class="card-title text-center"> 
                            <span class="badge rounded-pill bg-dark"> <h1>{{equipo.totalPuntos}}</h1></span>
                            </h3>

                           
                           <puntosAnotados 
                           v-bind:idEquipo="indexEquipo"
                           v-bind:nombreEquipo="equipo.nombre"
                           v-bind:ListaJugadores="[equipo.jugador]"
                           ></puntosAnotados>
                         
                    </div>
                                     
                  
                </div>
            </div>

        </div>
</template>

<script>
import puntosAnotados from '@/components/PuntosAnotados.vue';
import {mapState, mapMutations} from 'vuex';

export default {
   
    name:"puntaje",
    components:{
        puntosAnotados,
    },

    computed:{
        ...mapState(['equipos']),
        ...mapMutations(['totalPuntos'])
    }
    
}
</script>