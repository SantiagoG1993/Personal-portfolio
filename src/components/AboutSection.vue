<template>
    <div id="aboutSection" class="about_section_main_container">
        <img src="img_about_1.svg" alt="" id="img_1" class="wow animate__animated animate__fadeIn">
        <img src="img_cv.png" alt="img_about" id="img_about" class="wow animate__animated  animate__fadeInRight "> 
        <section class="text_container">
            <h1 v-if="language == 'en'" id="about">About <span id="me">Me</span></h1>
            <h1 v-else id="about">Sobre <span id="me">Mi</span></h1>
            <p v-if="language == 'en'"id="text_description" class="wow animate__animated animate__fadeInDown">I am a person who likes to combine logical problem solving with a creative approach to develop unique digital experiences. I love working as a team, collaborating with designers and other developers to take our ideas to the next level.</p>
            <p v-else id="text_description" class="wow animate__animated animate__fadeInDown">Soy una persona a la que le gusta combinar la resolución lógica de problemas con un enfoque creativo para desarrollar experiencias digitales únicas. Me encanta trabajar en equipo, colaborar con diseñadores y otros desarrolladores para llevar nuestras ideas al siguiente nivel.</p>
        </section>
        <section class="tecs_container">
            <h2 v-if="language == 'en'">Technologies</h2>
            <h2 v-else>Tecnologias</h2>
            <div class="tecs_icos_container wow animate__animated animate__fadeInDown" >
                <i class="fa-brands fa-html5"></i> 
                <i class="fa-brands fa-css3-alt"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-vuejs"></i>
                <i class="fa-brands fa-java"></i>
                <img src="spring_ico.svg" alt="">
                <img src="springboot_ico.svg" alt="">
                <img src="postgres_ico.svg" alt="">
                <i class="fa-brands fa-figma"></i>
            </div>
        </section>
            <ul class="list_tecs wow animate__animated animate__fadeInRight">
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Vue.js</li>
                <li>Figma</li>
                <li>JAVA</li>
                <li>Spring Framework</li>
                <li>SpringBoot</li>
                <li>PostgreSQL</li>
            </ul>
        <UpButton />
    </div>
</template>

<script setup>
import { onMounted,computed } from 'vue'
import UpButton from './UpButton.vue';
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

</script>

<style scoped>
.about_section_main_container{
    width: 100%;
    height: 100vh;
    background-color: #B8B8B8;
    user-select: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
#img_about{
filter: grayscale(80%);
width: 40%;
height: 200px;
object-fit: cover;
position: absolute;
bottom: 5%;
left: 15px;
border-radius:5px!important;
}
#img_1{
    position: absolute;
    width: 50%;
    top: 50px;
    left: -45px;
}
.text_container{
    width:100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: center;
    font-family: var(--font1);
}
#about{
    font-size: 35px;
    color: rgb(96, 94, 94);
}
#me{
    color: var(--green1);
}
#text_description{
    font-weight: 300;
    font-size: 24px;
    width: 90%;
}
.tecs_container{
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tecs_icos_container {
font-size: 55px;
display: flex;
justify-content: flex-start;
gap: 20px;
flex-wrap: wrap;
width: 79%;
color: rgb(75, 75, 75);
margin-top: 30px;
}
h2{
    font-family: var(--font1);
    color: rgb(96, 94, 94);
}
.list_tecs{
    position: absolute;
    right: 10%;
    bottom: 70px;
    font-family: Arial, Helvetica, sans-serif;
}
@media (min-width:1000px){
#img_about{
    display: unset;
    width: 250px;
    height: 90vh;
    right: 40px;
    border-radius: 4px;
    top: 30px;
    object-fit: cover;
    filter: grayscale(90%);
    position: absolute;
    left: auto
}

.text_container{
/*     border: 1px solid red; */
    width: 50%;
    position: absolute;
    top: 5%;
    text-align: unset;
    left: 25%;
}
#about{
    align-self: flex-start;
    margin-left: 80px;
}
#about{
    font-size: 45px;
}
#text_description{
font-size: 22px;
}
.tecs_container{
    height: 300px;
    width: 40%;
    left: 20%;
    position: absolute;
    bottom: 12%;
}
.tecs_icos_container {
    font-size: 70px;
    gap: 30px;
    flex-wrap: wrap;
    width: 60%;
    margin-top: 40px;
}
.tecs_icos_container img{
    width: 60px;
}
.list_tecs{
    display: unset;
    font-family: var(--font1);
    position: absolute;
    font-size: 22px;
    right: 25%;
    color: rgb(52, 52, 52);
bottom: 10%;
}
#img_1{
    width: unset;
    top: 30px;
    left: 10%;
}

}
</style>