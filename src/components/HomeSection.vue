<template>
    <div id="homeSection" class="home_section_main_container">
        <NavBarComponent />
        <h1 id="title" class="wow animate__animated animate__fadeInDown">Santiago Gamarra</h1>
        <h2 id="subtitle" class="wow animate__animated animate__fadeInUp" v-if="language == 'en'">Full Stack web developer</h2>
        <h2 id="subtitle" class="wow animate__animated animate__fadeInUp" v-else>Desarrollador web full stack</h2>
        <img src="IMAGE.jpg" alt="profileimg" id="img" class="wow animate__animated animate__fadeInLeft"> 
        <p v-if="language=='en'" id="description" class="wow animate__animated animate__fadeInRight">Hi! , I'm Santiago, i build websites and applications using Vue.js and Java. <br>I'm from Buenos Aires , Argentina and i'm currently working as a freelancer
        </p>
        <p v-else id="description" class="wow animate__animated animate__fadeInRight">¡Hola! , Soy Santiago, desarrollo sitios web y aplicaciones usando Vue.js y Java. <br>Soy de Buenos Aires, Argentina y actualmente trabajo como freelance
        </p>
        <div class="btn_container wow animate__animated animate__fadeInDown" >
            <a :href="cvFilePath" download="Santiago-Gamarra(en).pdf" v-if="language=='en'"><button class="btn resume_btn">Download resume</button></a>
            <a v-else :href="cvFilePath" download="Santiago-Gamarra(es).pdf"><button  class="btn resume_btn">Descargar CV</button></a>
            <button v-if="language=='en'" class="btn read_btn" @click="scrollTo(1)">Read more!</button>
            <button v-else class="btn read_btn" @click="scrollTo(1)">Saber mas!</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted,computed } from 'vue'
import NavBarComponent from './NavBarComponent.vue'
import WOW from 'wow.js'
import 'animate.css'
import { useStore } from 'vuex'

const store=useStore()

const language = computed(()=>{
    return store.getters.getLanguage
})

const cvFilePath = 'Santiago Gamarra(English)'

onMounted(()=>{
    const wow = new WOW(
        {
            duration:'0.3s'
        }
    )
    wow.init();
})
const scrollTo = (number)=>{
    document.documentElement.scrollTo(
        {
            top:window.innerHeight*number,
            behavior:'smooth'
        }
    )
}
</script>

<style scoped>
.home_section_main_container{
    animation: fadeIn .5s;
    width: 100%;
    height: 100vh;
    background-color: var(--dark2);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    user-select: none;

}
#description{
    width: 80%;
    padding: 20px;
    position: absolute;
    top: 30%;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 800;
    background-color: #2f53589e;
}
#img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
    filter: blur(3px);
    position: absolute;
    bottom: 0px;
}
h1{
    color: rgb(199, 199, 199);
    margin-top: 30px;
    font-size: 40px;
}
h2{
    margin-bottom: 30px;
}
h1,h2,#description{
    font-family: var(--font1);
    color: var(--grey1);
}
#subtitle{
    font-weight: 300;
    font-style: italic;
}
.btn_container{
    width: 100%;
    position: absolute;
    bottom: 15%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.btn{
    width: 150px;
    height: 57px;
    border-radius: 25px;
    border: none;
    font-family: var(--font1);
    margin-top: 10px;
    font-size: 16px;
}
.resume_btn{
    width: 60%;
    background-color: #2F5358;
    color: var(--grey1);
}
.resume_btn:active{
    background-color: #D5D5D5; 
    color: #2F5358;   
}
.read_btn{
    background-color: #D5D5D5;
    color: #2F5358;
}
.read_btn:active{
    background-color: #2F5358;
    color: var(--grey1);  
}
@media (min-width:1000px){
    #img{
        top: 78px;
        height: 100%;
        width: 50%;
        filter: blur(3px);
        left: 0px;
    }

.resume_btn:hover{
    cursor: pointer;
    transition: .3s all ease-in-out;
    background-color: transparent;
    border: 2px solid var(--grey1);
        color: rgb(226, 224, 224);  
}
.read_btn:hover{
    cursor: pointer;
    transition: .3s all ease-in-out;
    background-color: transparent;
    border: 2px solid var(--grey1);
    color: rgb(226, 224, 224);  
}
#title,#subtitle,#description{
    z-index: 100;
    color: white;
    
}
.btn_container{
    flex-direction: row;
    gap: 30px;
    width: unset;
    left: 35%;
    bottom: 20%;
}
.resume_btn,.read_btn{
    width: 300px;
    font-size: 18px;
    height: 60px!important;
}
h1{
    margin: 0px;
    position: absolute;
    left: 32%;
    top: 30%;
    font-size: 70px;
}
h2{
    position: absolute;
    left: 33%;
    top: 42%;
    font-size: 40px;
    font-style: unset!important;
}
#description{
    left: 32%;
    top: 50%;
    width: 800px;
    font-size: 22px;
    font-weight: 200;
}

}
</style>