<template>
    <div id="display">
        <header>{{ setList.name }}</header>
        <main @click="toggleMetronome">
            <span id="artist">{{ currentSong?.artist }}</span>
            <span id="song-title">{{ currentSong?.title }}</span>
        </main>
        <footer>
            <button id="prev" @click="prevSong">Prev</button>
            <button id="edit" @click="gotoEdit">Edit</button>
            <button id="next" @click="nextSong">Next</button>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { useSetListStore } from '@/stores/setlist';
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';

const setListStore = useSetListStore();
const setList = ref(setListStore.setList);

const currentSong = computed(() => setList.value.songs[currentSongIndex.value]);
const currentSongIndex = ref(0);
const metronomeStatus = ref(false);

const router = useRouter();

let metronomeInterval: number | null = null
let metronomeFrequency = computed(() => {
    if (!currentSong.value) return 0;
    return 60 / currentSong.value.tempo;
});

function nextSong() {
    stopMetronome();
    if (currentSongIndex.value < setList.value.songs.length - 1) {
        currentSongIndex.value++;
    }
}

function prevSong() {
    stopMetronome();
    if (currentSongIndex.value > 0) {
        currentSongIndex.value--;
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

function gotoEdit() {
    stopMetronome();
    const listId = setList.value.id;
    router.push(`${listId}/settings`);
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