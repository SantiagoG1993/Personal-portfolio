<template>
    <div class="nav_main_container">
        <div id="social_container">
            <a href="https://github.com/SantiagoG1993" target="_blank" ><i class="fa-brands fa-github"></i></a>
            <a href="http://www.linkedin.com/in/santiago-gamarra-b2a4b1287" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div class="flags_container">
            <img src="spflag.png" alt="spain_flag" @click="handleFlagClick('sp')" :class="{'--selected':language == 'sp'}">
            <img src="enflag.png" alt="england_flag" @click="handleFlagClick('en')" :class="{'--selected':language == 'en'}">
        </div>
        <LogoComponent />
        <i class="fa-solid fa-bars" @click="showNav"></i>
        <nav class="nav_container wow animate__animated animate__fadeInDown" v-if="language == 'en'">
            <p>Home</p>
            <p @click="scrollTo(1)">About</p>
            <p @click="scrollTo(2)">Projects</p>
            <p @click="scrollTo(3)">Contact</p>
        </nav>
        <nav class="nav_container wow animate__animated animate__fadeInDown" v-else>
            <p>Home</p>
            <p @click="scrollTo(1)">Sobre mi</p>
            <p @click="scrollTo(2)">Proyectos</p>
            <p @click="scrollTo(3)">Contacto</p>
        </nav>
        <nav class="nav_r_container " v-if="navIsVisible == true && language == 'en'" ref="nav_container" >
            <p>Home</p>
            <p @click="scrollTo(1)">About</p>
            <p @click="scrollTo(2)">Projects</p>
            <p @click="scrollTo(3)">Contact</p>
        </nav>
        <nav class="nav_r_container " v-if="navIsVisible == true && language == 'es'" ref="nav_container" >
            <p>Home</p>
            <p @click="scrollTo(1)">Sobre mi</p>
            <p @click="scrollTo(2)">Proyectos</p>
            <p @click="scrollTo(3)">Contacto</p>
        </nav>
    </div>
</template>

<script setup>
import LogoComponent from './LogoComponent.vue'
import { ref,onMounted,computed } from 'vue';
import { onClickOutside } from '@vueuse/core'
import WOW from 'wow.js'
import 'animate.css'
import { useStore } from 'vuex'

const store=useStore()

const language = computed(()=>{
    return store.getters.getLanguage
})

const handleFlagClick =(lang)=>{
    store.commit('setLanguage',lang)
    console.log(language.value)

}
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
const navIsVisible = ref(false)
const nav_container = ref(null)

const showNav = ()=>{
    navIsVisible.value = true
}
onClickOutside(nav_container,()=>{
    navIsVisible.value = false
})
</script>

<style scoped>
.nav_main_container{
    user-select: none;
    width: 100%;
    height: 80px;
    background-color: var(--dark1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
}
.flags_container{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        left: 43%;
    }
    .flags_container img{
        border-radius: 2px;
        filter: grayscale(100%);
    }
    .flags_container img:hover{
        filter: grayscale(20%)!important; 
        transition: all .2s ease-in-out;
        cursor: pointer;
    }
    .--selected{
        filter: grayscale(20%)!important;      
    }
.fa-bars{
    color: var(--grey1);
    font-size: 30px;
}
.fa-bars:active{
    color: var(--lgrey);
}
#social_container{
    display: flex;
    gap: 10px;
    align-items: center;
    width: 90px;
    height: 50px;
}
#social_container i{
    font-size: 35px;
    color: var(--grey1);
}
.nav_r_container{
    animation: slideInDown .4s;
    width: 100%;
    height: 280px;
    background-color: var(--dark1);
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    user-select: none;
    z-index: 5;
}
.nav_r_container p {
    color: var(--grey1);
    font-family: var(--font1);
    font-size: 20px;
    cursor: pointer;

}
.nav_r_container p:active{
    color: var(--lgrey);
}
.nav_container{
    display: none;
}
@media (min-width:1000px){
    .nav_main_container{
    display: flex;
    align-items: center;
    justify-content: space-between; 
    }

    .fa-bars{
        display: none;
    }
    .nav_container{
        display: flex;
        font-family: var(--font1);
        color: var(--grey1);
        gap: 45px;
        font-size: 20px;
        margin-right: 15%;
        user-select: none;
        cursor: pointer;
        font-weight: bold;
    }
    .nav_container p:hover{
        color: var(--green1);
        transition: .2s all ease-in-out;
    }    
    #social_container{
        animation: slideInRight .3s;
        right: 35px;
        position: absolute;
        gap: 25px;
    }
    #social_container i:hover{
        color: var(--lgrey);
        cursor: pointer;
        transition: .6s all ease-in-out;
    }
    .flags_container{
        gap: 20px;
        left: 30%;
    }
    
}
</style>