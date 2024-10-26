<!-- <script setup lang="ts">
import type { FormError } from '#ui/types'
import { createClient } from '@supabase/supabase-js';
import type { UserLogin } from '~~/types/types';

const supabase = createClient('https://jjewrcjhtqwapmssonfo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZXdyY2podHF3YXBtc3NvbmZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwNjIwNDUsImV4cCI6MjA0MzYzODA0NX0.zqk2RUxq6L74-n4b137mOm4LM85K-d8Z9_XzUFbW7i0');

const fields = [{
  name: 'email',
  type: 'text',
  label: 'Email',
  placeholder: 'Enter your email'
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password'
}, {
  name: 'remember',
  label: 'Remember me',
  type: 'checkbox'
}]

const validate = (state: any) => {
  const errors: FormError[] = []
  if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' })
  return errors
}

const providers = [{
  label: 'Continue with GitHub',
  icon: 'i-simple-icons-github',
  color: 'white' as const,
  click: () => {
    console.log('Redirect to GitHub')
  }
}]

const onSubmit = async(user: UserLogin) => {
  const { data, error } = await supabase.auth.signInWithPassword(user);
  console.log(error);
}
</script>
-->

<template>
  <div class="flex justify-center items-center mt-[10%]">
    <div class="w-full max-w-md rounded-lg shadow-md p-8 border-slate-500 border">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

      <form @submit.prevent="login({email, password})">
        <div class="mb-6">
          <label for="email" class="block text-md font-medium text-gray-400">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="w-full mt-2 p-3 border border-gray-500 focus:bg-slate-950 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-slate-900"
            placeholder="you@example.com"
            required
            autocomplete="off"
          />
        </div>

        <div class="mb-8">
          <label for="password" class="block text-md font-medium text-gray-400">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="w-full mt-2 p-3 border border-gray-500 focus:bg-slate-950 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-slate-900 placeholder:text-md placeholder:text-slate-500"
            placeholder="●●●●●●●"
            required
            autocomplete="off"
          />
        </div>

        <div class="mb-6">
          <button
            @click="login({ email, password })"
            type="submit"
            class="w-full hover:bg-indigo-700 transition-all duration-500 border border-indigo-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </form>

      <div class="text-center text-gray-500 mb-6">or</div>

      <div>
        <NuxtLink
          to="/"
          class="w-full gap-4 border border-slate-400 transition-all duration-500 font-bold text-white py-4 px-4 rounded-md flex items-center justify-center hover:bg-indigo-700 hover:text-slate-200"
        >
          <GoogleIcon color="#9189f5" />
          Sign in with Google
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FormError } from '#ui/types';
import type { UserLogin } from '~~/types/types';
import { createClient } from '@supabase/supabase-js';
import GoogleIcon from '../../assets/icons/Google.vue';

const supabase = createClient("https://jjewrcjhtqwapmssonfo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZXdyY2podHF3YXBtc3NvbmZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwNjIwNDUsImV4cCI6MjA0MzYzODA0NX0.zqk2RUxq6L74-n4b137mOm4LM85K-d8Z9_XzUFbW7i0");

const email = ref('');
const password = ref('');

const login = async(user: UserLogin) => {

  const errors: FormError[] = []
  if (!user.email) errors.push({ path: 'email', message: 'Email is required' })
  if (!user.password) errors.push({ path: 'password', message: 'Password is required' })
  if (errors.length!=0) {
    console.log(errors);
    return errors
  }

  const { data, error } = await supabase.auth.signInWithPassword(user);

  console.log(error);
  console.log(data)

  email.value='';
  password.value='';
}

const loginWithGoogle = async(user: UserLogin) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  console.log(data);
}

</script>
