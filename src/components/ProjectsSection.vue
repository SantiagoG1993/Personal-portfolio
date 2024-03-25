<template>
    <div class="projects_section_main_container">
        <h1 id="latest">Latest <span id="projects">Projects</span></h1>
        <div class="cards_container">
            <CardProject />
            <CardProject />
            <CardProject />
        </div>
    </div>
</template>

<script setup>
import CardProject from './CardProject.vue'

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