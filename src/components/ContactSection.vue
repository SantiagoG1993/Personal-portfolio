<template>
    <div class="contact_section_main_container">
        <h1>Contact <span id="me">Me</span></h1>

    </div>
</template>

<script setup>

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
</style>