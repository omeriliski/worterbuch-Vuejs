<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
<template>
<div>
  <h1>Login</h1>
  <form >
    <input name="email" placeholder="email" type="email" />
    <input name="password" placeholder="password" type="password" />
    <button type="submit">Login</button>
  </form>
</div>
</template>


-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <!-- <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" /> -->
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <!-- <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            start your 14-day free trial
          </a>
        </p> -->
      </div>
      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <router-link to="/signup" class="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </router-link>
          </div>

          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button @click="activateMenu" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>

      </form>
    </div>
  </div>
  <router-view></router-view>
</template>


<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { LockClosedIcon } from '@heroicons/vue/solid'
import {useStore} from 'vuex';
export default {
  components: {
    LockClosedIcon,
  },
  setup() {
    const auth = getAuth()
    const router = useRouter()
    const store = useStore()
    
    const activateMenu=()=>{
      store.commit("activateMenu",0)
    }

    const handleSubmit = e => {
      const { email, password } = e.target.elements
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then(()=>{
          router.push('/')
        })
        .catch (e=>{
          alert(e.message)
      }) 
    }
    return { handleSubmit,activateMenu }
  }
}
</script>