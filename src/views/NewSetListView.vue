<template>
    <h1>Creating New Set List...</h1>
</template>

<script setup lang="ts">
import SetListApi from '@/api';
import { SetList } from '@/classes';
import { useRouter } from 'vue-router';

const router = useRouter();

const setList = new SetList(
    "New Set List",
    [],
    "",
)

SetListApi.createSetList(setList).then(setList => {
    router.push({ name: 'editList', params: { setList: setList.id } });
});
</script>

<style scoped></style>
