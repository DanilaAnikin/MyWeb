<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :fill="color"
    viewBox="0 0 24 24"
    class="w-5 h-5 mr-2"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.35 11.1H12v2.82h5.45c-.236 1.26-.93 2.323-1.987 3.03v.04l2.88 2.44.2.02c1.722-1.61 2.71-3.98 2.71-6.86 0-.56-.06-1.1-.14-1.63z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22c2.64 0 4.86-.88 6.49-2.37l-3.1-2.63c-.8.54-1.82.86-3.39.86-2.6 0-4.81-1.76-5.6-4.12h-.06l-3.14 2.57-.04.06c1.65 3.14 5.01 5.64 8.84 5.64z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.39 13.74a5.41 5.41 0 010-3.48v-.06L3.2 7.57l-.06.04c-1.45 2.87-1.45 6.26 0 9.13l3.25-2.64z"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 6.09c1.43 0 2.71.49 3.72 1.43l2.75-2.7C16.84 2.65 14.64 2 12 2 8.18 2 4.83 4.5 3.2 7.57l3.19 2.63c.79-2.36 3-4.11 5.61-4.11z"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  color?: string,
}>(), 
{
    color: 'white',
});
</script>