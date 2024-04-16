<template>
    <div class="logo_main_container wow animate__animated animate__fadeInLeft">
        <section class="name_container">
            <p class="symbol">&lt;&sol;</p>
            <p id="name">Santiago Gamarra</p>
            <p class="symbol">&gt;</p>
        </section>
        <p v-if="language == 'en'" id="subtitle">Full Stack web developer</p>
        <p v-else id="subtitle">Desarrollador web Full Stack</p>
    </div>
</template>

<script setup>
import { onMounted,computed } from 'vue';
import WOW from 'wow.js';
import 'animate.css';
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
    )
    wow.init();
})

</script>

<style scoped>
.logo_main_container{
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.name_container{
    display: flex;
    gap: 10px;
}
#name{
    font-family: var(--font1);
    color: var(--grey1);
    font-size: 25px;
}
.symbol{
    font-size: 33px;
    color: var(--green1);
    font-weight: bolder;
}
#subtitle{
    font-family: var(--font1);
    color: var(--grey1);
    align-self: flex-start;
    margin-left: 50px;
    font-size: 18px;
    font-style: italic;
}
@media (max-width:999px){
    .logo_main_container{
        display: none;
    }
}
</style>