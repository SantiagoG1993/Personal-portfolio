<template>
    <div class="up_button_main_container" v-if="isVisibleUp == true" @click="scrollTop">
        <i class="fa-solid fa-chevron-up"></i>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import 'animate.css'

const isVisibleUp = ref(false)

const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 100) {
        isVisibleUp.value = true;
    } else {
        isVisibleUp.value = false;
    }
}
const scrollTop = ()=>{
    document.documentElement.scrollTo(
        {
            top: 0,
            behavior: 'smooth' 
        }
    )
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.up_button_main_container{
z-index: 1000;
    animation: slideInRight 0.3s;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--green1);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom:15px;
    right: 5%;
}
.fa-chevron-up{
    color: var(--lgrey);
}
.up_button_main_container:hover{
cursor: pointer;
background-color: #458088;
transition: all .3s ease-in-out;
}
</style>