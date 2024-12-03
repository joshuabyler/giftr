<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Sign Up',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/sign-up'
}, {
  label: 'Group',
  icon: 'i-heroicons-link',
  to: '/group'
}]
</script>

<template>
  <UBreadcrumb :links="links" />
</template>