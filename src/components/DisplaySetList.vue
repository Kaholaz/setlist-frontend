<template>
    <div id="display">
        <header>{{ setList.name }}</header>
        <main>
            <span id="artist">{{ currentSong?.artist }}</span>
            <span id="song-title">{{ currentSong?.title }}</span>
        </main>
        <footer>
            <button id="prev" @click="prevSong">Prev</button>
            <button id="metronome" @click="toggleMetronome">Metronome</button>
            <button id="next" @click="nextSong">Next</button>
        </footer>
    </div>
</template>

<script setup lang="ts">
import type { Song } from '@/classes'
import { useSetListStore } from '@/stores/setlist';
import { computed, ref } from 'vue'

const setListStore = useSetListStore();
const setList = setListStore.setList;
const songs = setList.songs;

const currentSong = ref<Song | null>(setList.songs[0]);
const currentSongIndex = ref(0);
const metronomeStatus = ref(false);

let metronomeInterval: number | null = null
let metronomeFrequency = computed(() => {
    if (!currentSong.value) return 0;
    return 60 / currentSong.value.tempo;
});

function nextSong() {
    stopMetronome();
    if (currentSongIndex.value < songs.length - 1) {
        currentSongIndex.value++;
        currentSong.value = songs[currentSongIndex.value];
    }
}

function prevSong() {
    stopMetronome();
    if (currentSongIndex.value > 0) {
        currentSongIndex.value--;
        currentSong.value = songs[currentSongIndex.value];
    }
}

function startMetronome() {
    blinkScreen();
    if (!metronomeInterval)
        metronomeInterval = setInterval(() => { blinkScreen(); }, metronomeFrequency.value * 1000);
    metronomeStatus.value = true;
}

function stopMetronome() {
    if (metronomeInterval) {
        clearInterval(metronomeInterval);
        metronomeInterval = null;
    }
    metronomeStatus.value = false;
}

function toggleMetronome() {
    if (metronomeStatus.value) {
        stopMetronome();
    } else {
        startMetronome();
    }
}

function blinkScreen() {
    let display = document.getElementById('display');
    if (!display) return;

    display.style.backgroundColor = 'yellow';
    setTimeout(() => {
        if (!display) return;
        display.style.backgroundColor = 'transparent';
    }, 100);
}
</script>

<style scoped>

#display {
    width: 100%;
    height: 100%;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: transparent;
}

#display > header {
    font-size: 3rem;
}

#display > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#artist {
    font-size: 3rem;
}

#song-title {
    font-size: 2rem;
}

#display > footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 2rem;
}

button {
    font-size: 2rem;
}
</style>