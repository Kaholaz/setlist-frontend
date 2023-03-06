<template>
    <div id="wrapper">
        <h1>Loading...</h1>
        <div id="loading-spinner"></div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
    #loading-spinner {
        width: 5rem;
        height: 5rem;
        border: 0.5rem solid #2c3e50;
        border-top: 0.5rem solid #3498db;
        border-radius: 50%;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    #wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        margin: auto;
    }
</style>