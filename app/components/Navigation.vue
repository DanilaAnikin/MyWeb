
<script lang="ts" setup>
import type { User } from '@supabase/supabase-js';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://jjewrcjhtqwapmssonfo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZXdyY2podHF3YXBtc3NvbmZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwNjIwNDUsImV4cCI6MjA0MzYzODA0NX0.zqk2RUxq6L74-n4b137mOm4LM85K-d8Z9_XzUFbW7i0");
const loggedUser = ref<User | null>();

const userShowName = ref<string>('');

const getUser = async() => {
  const { data: { user } } = await supabase.auth.getUser();
  loggedUser.value = user;
  
  userShowName.value = user?.user_metadata.full_name ? user.user_metadata.full_name : user?.user_metadata.name ? user.user_metadata.name : user?.user_metadata.email
}

const onChange = async() => {
  const { data } = await supabase.auth.onAuthStateChange((event, session) => { 
    if(event === "SIGNED_OUT" || event === "SIGNED_IN" || event === "USER_UPDATED") {
      getUser();
    }
  });
  data.subscription.unsubscribe();
}

onMounted(() => {
  getUser();
})
</script>

<template>
  <header class="py-4 border-b border-slate-400">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-4 items-center">
        <NuxtImg width="56px" densities="x1" format="webp" class="rounded-full" src="/Logo.jpg" alt="" />
        <span class="text-3xl font-bold">Danila Anikin</span>
      </NuxtLink>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize items-center">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="loggedUser ? '/signOut' : 'signIn'">{{`${ loggedUser ? 'Sign Out' : 'Sign In' }`}}</NuxtLink>
        </li>
        <li v-if="loggedUser">
          <div class="flex items-center gap-4 border border-slate-400 rounded-3xl">
            <p :class="`${ loggedUser.user_metadata.avatar_url ? 'ml-4' : 'mx-4 my-3' }`">{{ userShowName }}</p>
            <NuxtImg
              v-if="loggedUser?.user_metadata.avatar_url"
              :src="loggedUser?.user_metadata.avatar_url"
              format="webp"
              width="48px"
              class="rounded-3xl"
            >
            </NuxtImg>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>