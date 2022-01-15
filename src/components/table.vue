<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="flex flex-col mt-10">
  <div class="-my-2 overflow-x-auto sm:-mx-10 lg:-mx-20">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deutsch 
                <svg @click="sortWords('german')" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </th>
              <th scope="col" class="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Turkisch
                <svg @click="sortWords('turkish')" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </th>
              <th scope="col" class="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Beispiel Satz
              </th>
              <th scope="col" class="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lernniveau
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="word in wordList" :key="word">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  {{word.german}}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{word.turkish}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{word.sentence}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr>
            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup(){
    const store = useStore()
    store.commit("getData") 
    const wordList=computed(()=>{ 
       return store.getters.wordList
      })
    const sortWords = (column) => {
      store.commit("sortWords",column)
    }
    return{wordList,sortWords}
  }
}

</script>