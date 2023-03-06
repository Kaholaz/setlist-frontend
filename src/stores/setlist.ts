import { ref, computed } from 'vue'
import { Song, SetList } from '@/classes'
import { defineStore } from 'pinia'

export const useSetListStore = defineStore('setListStore', () => {
    const setList = ref<SetList>(new SetList('New Set List', []))


    return {
        setList
    }
});
