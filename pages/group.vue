<script setup lang="ts">

const lists = ref([
  {
    name: 'list1',
    id: 1
  },
  {
    name: 'list2',
    id: 2
  }
])

const state = reactive({
  groupName: undefined,
  groupNumber: undefined,
  lists
})

const isOpen = ref(false);

</script>

<template>
  <div class="group">
    <div class="group-settings">
      <p>you can add/remove from the group</p>
    </div>
    <div class="group-lists">
      <p>if there are no lists here, add one.  If there are lists then you can manage the lists here without
      opening them.  Managing them means deleting, changing the owner, and then being able to open and edit it.</p>
      <div v-for="list in lists" :key="list.id" class="list">
        <UButton>{{ list.name }}</UButton>
      </div>
      <UButton @click="isOpen = true">Add List</UButton>
    </div>
    <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">

        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Modal
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <Placeholder class="h-32" />

        <template #footer>
          <Placeholder class="h-8" />
        </template>
      </UCard>
    </UModal>
  </div>
</template>