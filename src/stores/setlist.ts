import { ref, computed } from 'vue'
import { Song, SetList } from '@/classes'
import { defineStore } from 'pinia'

export const useSetListStore = defineStore('setListStore', () => {
    const setList = ref<SetList>(new SetList('New Set List', []))

    function addSong() {
        const song = new Song('Song Title', 'Artist', 120, 4)
        setList.value.songs.push(song)
    }

    function removeSong(index: number) {
        setList.value.songs.splice(index, 1)
    }

    return {
        setList,
        addSong,
        removeSong,
    }
});
