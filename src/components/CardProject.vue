<template>
    <div class="card_main_container"  @mouseleave="isVisibleText = false">
        <div v-if="isVisibleText == true" class="text_container">
            <h1>{{props.projectName}}</h1>
            <p>{{props.description}}</p>
        </div>
        <img :src="props.img" alt="taskwing" id="img" :class="{ '--selected': isVisibleText }" @mouseover="handleHover">
        <i class="fa-brands fa-github"></i>
        <i class="fa-solid fa-earth-americas"></i>

    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import 'animate.css'

const isVisibleText = ref(false)
const props = defineProps(
    {
        projectName:String,
        description:String,
        img:String
    }
)
const handleHover = ()=>{
    isVisibleText.value = true
}

</script>

<style scoped>
    .card_main_container{
        width: 300px;
        height: 180px;
        background-color: transparent;
        border-radius: 4px;
        display: flex;
        position: relative;
    }
    .text_container{
        width: 100%;
        text-align: center;
        z-index: 4;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
h1,p{
    font-family: var(--font1);
    font-weight: 500;
    color: #54b6bb;
}
h1{
    animation: slideInLeft .3s;

}
p{
    color: rgb(32, 32, 32);
    animation: slideInRight .3s;
    font-weight: 400;
    font-size: 19px;
}
    #img{
        width: 100%;
        cursor: pointer;
        position: absolute;
        height: 100%;
        object-fit: cover;
        top: 0px;
        filter: grayscale(60%);
    }
    .--selected{
        filter: grayscale(100%) blur(3px)!important ;
        transition: all 0.3s ease-in-out;
    }
    @media (min-width:1000px){
    .card_main_container{
        width: 300px;
        height: 270px;
    } 
    #img{
        width: 100%;
        height: 80%;
        object-fit: cover;
        top: 0px;
    }   
    .text_container{
        height: 80%;
    }  
    .fa-github,.fa-earth-americas{
        z-index: 4;
        position: absolute;
        bottom: 7px;
        left: 10%;
        font-size: 40px;
        color:var(--grey1);
    }
    .fa-earth-americas{
        left: 30%;
    }
    i{
        animation: slideInDown .3s;
    }
    i:hover{
        color: rgb(227, 227, 227);
        transition: all .3s ease-in-out;
        cursor: pointer;
    }
}
</style>