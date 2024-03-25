<template>
    <div class="logo_main_container">
        <section class="name_container">
            <p class="symbol">&lt;</p>
            <p id="name">Santiago Gamarra</p>
            <p class="symbol">&sol;&gt;</p>
        </section>
        <p id="subtitle">Full Stack web developer</p>
    </div>
</template>

<script setup>

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