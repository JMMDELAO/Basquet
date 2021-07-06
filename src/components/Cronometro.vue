<template>
  <div>
        <div class="card mb-5">
    <div class="row g-0">
        <div class="jumbotron col-md-5">
            <div class="alert alert-success">
                <h4 class="alert-heading text-center">Tiempo</h4>
            </div>
            <h1 id="timerDiv" class="text-center"> {{horas}}:{{minutos}}:{{segundos}}</h1>
                
        </div>
        <div class="col-md-2 text-center">

            <div class="jumbotron col-md-10 ">
               
                <div class="alert alert-success" >
                <h4 class="alert-heading text-center">  |</h4>
            </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button" @click="iniciarContador">Iniciar</button>
                    <button class="btn btn-primary" type="button">Button</button>
                    </div>


            </div>
            
        </div>
        <div class="jumbotron col-md-5">
           <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading text-center">Periodo</h4>
                </div>
                <h1 id="PeriodoDiv" class="text-center" >{{periodo}} </h1>
                
        </div>




        
     </div>
</div> 

  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "cronometro",
  computed: {
    ...mapState(['horas']),
    ...mapState(['minutos']),
    ...mapState(['segundos']),
    ...mapState(['periodo']),
  },
  methods: {
      ...mapMutations(['iniciarContador']),
  },

};
</script>