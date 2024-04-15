<template>
    <div id="contactSection" class="contact_section_main_container">
        <h1 class="wow  animate__animated animate__fadeIn">Contact <span id="me">Me</span></h1>
        <form action="">
            <div class="container_1 wow animate__animated animate__fadeInRight">
                <input type="text" placeholder="Full name">
                <input type="email" placeholder="Email adress">
            </div>
            <div class="container_2 wow animate__animated animate__fadeInLeft">
                <input type="text" placeholder="Subject">
                <input type="text" placeholder="Mobile number">
            </div>
            <input id="msg" type="text" placeholder="Your message" class="wow animate__animated animate__fadeInUp">
            <button id="btn" class="wow animate__animated animate__fadeInDown">Send message</button>
        </form>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import WOW from 'wow.js'
import 'animate.css'

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
    .contact_section_main_container{
        width: 100%;
        height: 100vh;
        background-color: #0A171A;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1{
        margin-top: 30px;
        font-family: var(--font1);
        color: var(--grey1);
    }
    #me{
        color: var(--green1);
    }
    form{
        margin-top: 75px;
        height: 75%;
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 35px;
    }
    form input{
        height: 50px;
        border-radius: 12px;
        background-color: transparent;
        color: #B8B8B8;
        padding-left: 20px;
        font-family: var(--font1);
        font-size: 16px;
        cursor: pointer;        
        border: 4px solid var(--green1);
    }
    form input:focus{
        outline: none;
        transition: all .3s ease-in-out;
        background-color: var(--green1);
    }
    form input:hover{
      background-color: #213e42 ;
    }   
    
    #msg{
        height: 120px;
    }
    #btn{
        width: 180px;
        align-self: center;
        height: 45px;
        font-family: var(--font1);
        border-radius: 25px;
        background-color: #2F5358;
        border: none;
        color: #B8B8B8;
    }
    .container_1,.container_2{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 35px;
    }
    .container_1 input{
        width: 100%;
    }
    .container_2 input{
        width: 100%;
    }
    @media (min-width:1000px){
        .container_1,.container_2{
            flex-direction: row;
        }
        #msg{
        height: 280px;
        margin-bottom: 35px;
    }
    #btn{
        font-size: 18px;
        height: 60px;
        width: 300px;
    }
    #btn:hover{
        background-color: #4a7a82;
        cursor: pointer;
        transition: all .3s ease-in-out;
    }
    }
</style>