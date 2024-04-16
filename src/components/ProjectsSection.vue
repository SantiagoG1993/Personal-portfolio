<template>
    <div class="projects_section_main_container">
        <h1 v-if="language == 'en'" id="latest" class="wow animate__animated animate__fadeIn ">Latest <span id="projects">Projects</span></h1>
        <h1 v-else id="latest" class="wow animate__animated animate__fadeIn ">Proyectos <span id="projects">Recientes</span></h1>
        <div class="cards_container wow animate__animated animate__fadeInUp" >
            <CardProject v-for="project of projects" 
            :key="project.projectName"
            :projectName="project.projectName"
            :description="language === 'en' ? project.description_eng : project.description_sp"
            :img="project.img"
            />
        </div>
    </div>
</template>

<script setup>
import { onMounted,computed } from 'vue'
import CardProject from './CardProject.vue'
import WOW from 'wow.js'
import 'animate.css'
import { useStore } from 'vuex'

const store=useStore()

const language = computed(()=>{
    return store.getters.getLanguage
})

onMounted(()=>{
    const wow = new WOW(
        {
            duration:'0.3s'
        }
    );
    wow.init();
})

const projects = [
    {
        projectName:'Taskwing',
        description_eng:'Web application dedicated to task management',
        description_sp:'Aplicacion web dedicada a la gestion de tareas',
        img:'taskwing.jpg'
    },
    {
        projectName:'Banco San Pedro',
        description_eng:'Online banking application',
        description_sp:'Aplicacion homebanking',
        img:'bancosp.jpg'
    },
    {
        projectName:'Alma Libre sublimados',
        description_eng:'E-commerce for a sublimated arcticles business',
        description_sp:'E-commerce para un negocio de articulos sublimados',
        img:'almalibre.jpg'
    },
]

</script>

<style scoped>
.projects_section_main_container{
    width: 100%;
    height: 100vh;
    background-color: #1B313B;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    font-family: var(--font1);
    margin-top: 40px;
}
#latest{
    color: grey;
}
#projects{
        color: var(--green1);
}
.cards_container{
    width: 100%;
    min-height: 50%;
    margin-top: 30px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
  @media (min-width:1000px){
    .cards_container{
        flex-direction: row;
    }
  }


</style>