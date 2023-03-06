<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-size: 24px;
}

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
  background-color: black;
}

input, button {
    height: 100%;
    width: fit-content;

    border: solid 0.1rem #2c3e50;
    border-radius: 0.2rem;
    background-color: transparent;
    color: #2c3e50;
}

input:focus, input:hover, button:hover {
    background-color: #2c3e50;
    color: white;
}

button:hover, input:hover {
  cursor: pointer;
}
</style>
