<template>
    <NotFoundView v-if="!found" />
    <LoadingScreen v-else-if="!done" />
    <EditSetList v-else />
</template>

<script setup lang="ts">
import SetListApi from '@/api';
import EditSetList from '@/components/EditSetList.vue'
import LoadingScreen from '@/components/LoadingScreen.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import { useSetListStore } from '@/stores/setlist';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const setList = route.params.setList as string;
const setListStore = useSetListStore();

const found = ref(true);
const done = ref(false);
SetListApi.getSetList(setList).then(setList => {
    setListStore.$patch({ setList });
    done.value = true;
}).catch(error => {
    found.value = false;
});
</script>

<style scoped>
</style>