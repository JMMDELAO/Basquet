<template>
    <div>

     <div class="row">
          

                    <div class="card-body col-sm-6">
        
                         <div class="accordion" id="accordionExample">


                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                         data-bs-target="#collapseTes" aria-expanded="true" aria-controls="collapseTes">
                                            Lista de Faltas.
                                        </button>
                                        </h2>
                                        <div id="collapseTes" class="accordion-collapse collapse show" 
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        
                                    <ol class="list-group list-group-numbered" 
                                    v-for="faltasLocal of faltasLocal"
                                    >
                                   <li class="list-group-item d-flex justify-content-between align-items-start"
                                     v-for="faltaLocal of faltasLocal">
                                        <div class="ms-2 me-auto">
                                        <div class="fw-bold">{{listaLocal.numeroAnotador}} - {{listaLocal.nombreAnotador}}</div>
                                        </div>
                                        <span class="badge bg-primary rounded-pill">{{listaLocal.AnotacionRealizada}}</span>
                                    </li>
                                </ol>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                                                    
                    </div>
                                
                    <div class="card-body col-sm-6">
        
                         <div class="accordion" id="accordionExample">


                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" 
                                        data-bs-toggle="collapse" data-bs-target="#collapseCuatro" 
                                        aria-expanded="true" aria-controls="collapseCuatro">
                                            Lista de Faltas.
                                        </button>
                                        </h2>
                                        <div id="collapseCuatro" class="accordion-collapse collapse show" 
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        
                                    <ol class="list-group list-group-numbered" 
                                    v-for="listadoVisitante of listadoPuntosAnotadosVisitante"
                                    >
                                   <li class="list-group-item d-flex justify-content-between align-items-start"
                                     v-for="listaVisitante of listadoVisitante.jugadorAnotacion">
                                        <div class="ms-2 me-auto">
                                        <div class="fw-bold">{{listaVisitante.numeroAnotador}} - {{listaVisitante.nombreAnotador}}</div>
                                        </div>
                                        <span class="badge bg-primary rounded-pill">{{listaVisitante.AnotacionRealizada}}</span>
                                    </li>
                                </ol>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                                                    
                    </div>




       </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
   
    name:"listaAnotaciones",

    computed:{
        ...mapState(['faltasLocal']),
        ...mapState(['faltasVisitante']),

    }
    
}
</script>