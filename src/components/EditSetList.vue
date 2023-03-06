<template>
    <div id="settings">
        <header>
            <h1>{{ setList.name }}</h1>
            <span id="spotify-link">
                <input type="text" v-model="setList.spotifyPlaylist" /><button @click="synchronizeSpotify">Synchronize</button>
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
    SetListApi.updateSetList(setList.value).then(newSetList => {
        setList.value = newSetList;
    });
}

function synchronizeSpotify() {
    SetListApi.syncSetList(setList.value).then(newSetList => {
        setList.value = newSetList;
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
    width: 100%;
}

button {
    width: fit-content;
}

table {
    width: 100%;
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

#add-song-row {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>