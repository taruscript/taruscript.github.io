<template>
  <div class="menu">
    <div class="title-area">
        <h1>Welcome to Taru's Portfolio</h1>
    </div>
    <div class="menu-area">
        <h1><router-link to="/whoami">Who am I</router-link></h1>
        <h1><router-link to="/skills">Skills</router-link></h1>
        <h1><router-link to="/works">Works</router-link></h1>
        <h1><router-link to="/accounts">Accounts</router-link></h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Menu',
});
</script>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
    * {
        color: rgb(101, 168, 255);
        font-family: 'Acme', sans-serif;
    }

    .title-area {
        margin: 3%;
    }
    .menu-area {
        font-size: 3rem;
        margin: 10%;
    }
    /* IPhone用 横 */
    @media screen and (max-width: 1024px) {
        .menu-area {
            margin-top: 40%;
        }
        .menu-area h1{
            font-size: 2rem;
        }
    }
</style>