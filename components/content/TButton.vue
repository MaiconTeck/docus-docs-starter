<script setup lang="ts">

defineProps<{
  title?: string
}>()
</script>

<template>
  <TeckButton variant="elevated" color="orange" rounded>{{ title }}</TeckButton>
</template>
