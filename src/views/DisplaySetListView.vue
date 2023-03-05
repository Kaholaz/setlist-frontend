<template>
    <DisplaySetList />
</template>

<script setup lang="ts">
import { SetList, Song } from '@/classes';
import DisplaySetList from '@/components/DisplaySetList.vue'
import { useSetListStore } from '@/stores/setlist';

const setListStore = useSetListStore();
setListStore.$patch({
    setList: new SetList("New Set List", [
        new Song("Song 1", "Artist 1", 120, 4),
        new Song("Song 2", "Artist 2", 140, 5),
        new Song("Song 3", "Artist 3", 160, 3)
    ] as Song[])
})
</script>

<style scoped>
</style>