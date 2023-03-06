<template>
    <NotFoundView v-if="!found" />
    <LoadingScreen v-else-if="!done" />
    <DisplaySetList v-else />
</template>

<script setup lang="ts">
import SetListApi from '@/api';
import DisplaySetList from '@/components/DisplaySetList.vue'
import LoadingScreen from '@/components/LoadingScreen.vue';
import { useSetListStore } from '@/stores/setlist';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import NotFoundView from './NotFoundView.vue';

const route = useRoute();
const router = useRouter();
const setList = route.params.setList as string;
const setListStore = useSetListStore();

const done = ref(false);
const found = ref(true);
SetListApi.getSetList(setList).then(setList => {
    setListStore.$patch({ setList });
    done.value = true;
}).catch(error => {
    found.value = false;
});
</script>

<style scoped>
</style>