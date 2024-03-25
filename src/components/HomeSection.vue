<template>
    <div class="home_section_main_container">
        <NavBarComponent />
        <h1 id="title">Santiago Gamarra</h1>
        <h2 id="subtitle">Full stack developer</h2>
        <img src="img_cv.png" alt="profileimg" id="img"> 
        <p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, velit! Iure pariatur accusamus eligendi natus. Doloremque officiis fugiat inventore rem quaerat culpa minus non, earum aliquam, aliquid facere veniam sint!</p>
        <div class="btn_container">
            <button class="btn resume_btn">Download resume</button>
            <button class="btn read_btn">Read more!</button>
        </div>
    </div>
</template>

<script setup>
import NavBarComponent from './NavBarComponent.vue'
import 'animate.css'

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
    width: 60%;
    padding: 20px;
    font-style: italic;
    position: absolute;
    right: 10px;
    top: 200px;
}
#img{
    width: 40%;
    height: 50vh;
    object-fit: cover;
    border-radius: 4px;
    filter: grayscale(90%);
    position: absolute;
    left: 0px;
    top: 200px;
}
h1{
    color: rgb(199, 199, 199);
    margin-top: 30px;
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
    bottom: 3%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.btn{
    width: 150px;
    height: 47px;
    border-radius: 25px;
    border: none;
    font-family: var(--font1);
    margin-top: 10px;
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
        top: 150px;
        height: 70%;
        width: 30%;
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
.btn_container{
    flex-direction: row;
    gap: 30px;
    width: unset;
    left: 35%;
    bottom: 20%;
}
.resume_btn,.read_btn{
    width: 250px;
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
    top: 48%;
    width: 800px;
    font-size: 22px;
    font-weight: 200;
}
}
</style>