<template>
    <div class="flex justify-center items-center mt-[10%]">
      <div class="w-full max-w-md rounded-lg shadow-md p-8 border-slate-500 border">
        <h2 class="text-2xl font-bold text-center mb-6">Sign Out</h2>
        <div class="mb-6 flex text-center">
            <NuxtLink
                to="/"
                @click="signOut()"
                class="w-full hover:bg-red-800 transition-all duration-500 border border-red-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
                Sign Out
            </NuxtLink>
        </div>

        <h1 class="text-center text-gray-500 mb-6">no?</h1>
        
        <NuxtLink
            to="/"
            class="w-full gap-4 border-indigo-800 border transition-all duration-500 font-bold text-indigo-300 py-4 px-4 rounded-md flex items-center justify-center hover:bg-indigo-800 hover:text-slate-200"
        >
            Back To Main Page
        </NuxtLink>
      </div>

      <!-- <div @click="update('gey vaclavsky')" class="cursor-pointer">gelllllooo</div> -->
    </div>
</template>

<script setup lang="ts">
import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://jjewrcjhtqwapmssonfo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZXdyY2podHF3YXBtc3NvbmZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwNjIwNDUsImV4cCI6MjA0MzYzODA0NX0.zqk2RUxq6L74-n4b137mOm4LM85K-d8Z9_XzUFbW7i0");

const signOut = async() => {
    const error = await supabase.auth.signOut();
}

// const update = async(full_name: string) => {
//     const { data, error } = await supabase.auth.updateUser({
//         data: {
//             full_name,
//         },
//     });
// } 

onMounted(async() => {
    const { data: { user } } = await supabase.auth.getUser();
    if(!user) {
        window.location.pathname = '/';
        return
    }
})
</script>
