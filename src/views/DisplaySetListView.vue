<template>
    <DisplaySetList />
</template>

<script setup lang="ts">
import SetListApi from '@/api';
import DisplaySetList from '@/components/DisplaySetList.vue'
import { useSetListStore } from '@/stores/setlist';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const setList = route.params.setList as string;

const setListStore = useSetListStore();
SetListApi.getSetList(setList).then(setList => {
    setListStore.$patch({ setList });
}).catch(error => {
    if (error.response.status === 404) {
        router.push({ name: '404' });
    }
});
</script>

<style scoped>
</style>