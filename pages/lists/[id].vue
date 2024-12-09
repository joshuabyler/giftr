<script setup lang="ts">
import { useStore } from '@/stores';
import { storeToRefs } from 'pinia'

const store = useStore();
const route = useRoute();
// const list = ref();
const { selectedList } = storeToRefs(store)

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
onMounted(() => {
  store.getById(route.params.id);
  console.log(selectedList.value.name);
})
</script>

<template>
  <div class="list-page">
    <h2>{{selectedList.name}}</h2>

  </div>
</template>