<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
  groupName: z.string(),
  groupNumber: z.number()
})

type Schema = z.output<typeof schema>

const state = reactive({
  groupName: undefined,
  groupNumber: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <div class="grid h-screen place-items-center">
    <section class="rounded-3xl">
      <div class="container mx-auto flex flex-col items-center px-12 py-24 md:flex-row">
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormGroup label="Group Name" name="group-name">
            <UInput v-model="state.groupName" />
          </UFormGroup>

          <UFormGroup label="Number in Group" name="group-number">
            <UInput v-model="state.groupNumber" />
          </UFormGroup>

          <UButton type="submit">
            Submit
          </UButton>
        </UForm>
      </div>
    </section>
  </div>
</template>