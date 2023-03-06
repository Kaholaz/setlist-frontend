<template>
    <LoadingScreen v-if="loading" />
    <div v-else id="settings">
        <header>
            <h1>{{ setList.name }}</h1>
            <span id="spotify-link">
                <button @click="synchronizeSpotify">Synchronize</button>
                <input type="text" placeholder="Spotify playlist URL" v-model="setList.spotifyPlaylist" />
            </span>
        </header>
        <main>
            <table>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Tempo</th>
                    <th></th>
                    <th></th>
                </tr>
                <SongRow v-for="(song, index) in setList.songs" :key="song.title" :song="song" :index="index" @delete="removeSong" />
            </table>
            <span id="add-song-row">
                <button @click="addSong">Add Song</button>
                <button @click="saveSetList">Save</button>
            </span>
        </main>
        <footer></footer>
    </div>
</template>

<script setup lang="ts">
import { useSetListStore } from '@/stores/setlist';
import SongRow from '@/components/SongRow.vue'
import SetListApi from '@/api';
import { ref } from 'vue';
import LoadingScreen from './LoadingScreen.vue';

const loading = ref(false);

const setListStore = useSetListStore();
const setList = ref(setListStore.setList);

function removeSong(index: number) {
    setList.value.songs.splice(index, 1);
}

function addSong() {
    setList.value.songs.push({
        title: "New Song",
        artist: "New Artist",
        tempo: 120,
    });
}

function saveSetList() {
    loading.value = true;
    SetListApi.updateSetList(setList.value).then(newSetList => {
        setList.value = newSetList;
    }).catch(err => {
        console.error(err);
    }).finally(() => {
        loading.value = false;
    });
}

function synchronizeSpotify() {
    loading.value = true;
    SetListApi.syncSetList(setList.value).then(newSetList => {
        setList.value = newSetList;
    }).catch(err => {
        console.error(err);
        setList.value.spotifyPlaylist = "";
    }).finally(() => {
        loading.value = false;
    });
}

</script>

<style>
main {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    height: 100%;
    width: 80%;
    margin: auto;
}

button {
    width: fit-content;
}

input {
    text-align: center;
}

table {
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

table > tr {
    height: 100%;
    width: 100%;
}

table > tr > th, table > tr > td {
    text-align: left;
    padding: 0;
    margin: 0;
}

#settings * {
    font-size: 1.2rem;
}

#add-song-row {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

input, button { 
    margin: 0.2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
</style>