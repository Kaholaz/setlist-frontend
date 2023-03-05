<template>
    <tr v-if="!edit" class="song-row">
        <td class="index">
            {{ index + 1 }}.
        </td>
        <td class="title">
            {{ song.title }}
        </td>
        <td class="artist">
            {{ song.artist }}
        </td>
        <td class="tempo">
            {{ song.tempo }}
        </td>
        <td><button @click="toggleEdit">Edit</button></td>
        <td><button @click="deleteSong">Delete</button></td>
    </tr>
    <tr v-else class="song-row">
        <td class="index">{{ index + 1 }}.</td>
        <td><input class="title" name="title" v-model="song.title" /></td>
        <td><input class="artist" name="artist" v-model="song.artist" /></td>
        <td><input class="tempo" name="tempo" v-model="song.tempo" /></td>
        <td><button @click="toggleEdit">Done</button></td>
        <td><button @click="deleteSong">Delete</button></td>
    </tr>
</template>

<script setup lang="ts">
import type { Song } from '@/classes'
import { ref } from 'vue'

let props = defineProps<{
    song: Song;
    index: number;
}>()

const emit = defineEmits<{
    delete: (index: number) => void;
}>()

const edit = ref(false);

function toggleEdit() {
    edit.value = !edit.value;
}

function deleteSong() {
    emit('delete', props.index);
}
</script>

<style scoped>
</style>