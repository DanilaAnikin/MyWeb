
<script lang="ts" setup>

</script>

<template>
  <header class="py-4 border-b border-slate-400">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-4 items-center">
        <NuxtImg width="56px" densities="x1" format="webp" class="rounded-full" src="/Logo.jpg" alt="" />
        <span class="text-3xl font-bold">Danila Anikin</span>
      </NuxtLink>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/aboutMe">About Me</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/signIn">Sign In</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>