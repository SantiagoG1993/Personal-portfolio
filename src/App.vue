<template>
    <div class="app_main_container">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
<!--       <UpButton /> -->
    </div>
</template>

<script setup>
import HomeSection from './components/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';


</script>

<style>
:root{
  --dark1:#102027;
  --dark2:#1B313B;
  --green1:#23565D;
  --grey1:#9C9C9C;
  --font1:"Jost", sans-serif;
  --lgrey:rgb(213, 213, 213);
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app_main_container{
  position: relative;
}

</style>