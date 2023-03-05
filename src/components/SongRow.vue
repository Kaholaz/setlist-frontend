<template>
    <div class="song-row">
        <div class="index">
            {{ index + 1 }}.
        </div>
        <div class="title">
            {{ song.title }}
        </div>
        <div class="artist">
            {{ song.artist }}
        </div>
        <div class="tempo">
            {{ song.tempo }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Song } from '@/classes'

let props = defineProps<{
    song: Song;
    index: number;
}>()
</script>

<style scoped>
.song-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    width: 90%;
    margin: auto;
}
</style>