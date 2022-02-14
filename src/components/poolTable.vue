<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class=" flex flex-col mt-10">
  <div class="-my-2 flex justify-center">
    <div class="w-11/12 py-2 align-middle inline-block  sm:px-6 lg:px-4">
      <div class="poolTableDiv shadow overflow-y-auto border-b border-gray-200 sm:rounded-lg">
        <table class="divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> 
              </th>
              <th scope="col" class="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deutsch 
                <svg @click="sortWords('targetLanguage')" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </th>
              <th scope="col" class="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Turkisch
                <svg @click="sortWords('firstLanguage')" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </th>
              <th scope="col" class=" w-7/12 sentence px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Beispiel Satz
              </th>
              <!-- <th scope="col" class="w-1/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lernniveau
              </th> -->
              <th scope="col" class=" w-1/12 px-6 py-3">
                <span class="sr-only">Add</span>
              </th>
              <!-- <th scope="col" class=" w-1/12 px-6 py-3">
                <span class="sr-only">Delete</span>
              </th> -->
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(word,index) in wordList" :key="index">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  {{index+1}}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  {{word.targetLanguage}}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{word.firstLanguage}}
              </td>
              <td class="sentence py-4">
                {{word.sentence}}
              </td>
              <td @click="addWordToWordList(word)"  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button :class="$store.state.isDisabled" class="text-indigo-600 hover:text-indigo-900">Add</button>
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
// import { isProxy, toRaw } from 'vue';
export default {
  
  setup(){
    const store = useStore()
    
    store.commit("getAllData")


    const wordList=computed(()=>{ 
      const str=store.state.userSettings.firstLanguage+"To"+store.state.userSettings.targetLanguage;
      
      store.state.organizedWordList[str]= store.state.generalWordList.filter(item=>item.userSettings.firstLanguage==store.state.userSettings.firstLanguage && item.userSettings.targetLanguage==store.state.userSettings.targetLanguage)

      const data = store.state.organizedWordList[str].map(e=>e.wordList)
      const organizedWordList=[]
      data.forEach(element => {
        element.forEach(e => {
          organizedWordList.push(e)
        });
      });
      return organizedWordList;
    })
    const addWordToWordList=(wordToAdd)=>{
      store.commit("addWordFromGeneralWordListToWordList",wordToAdd)
    }
    const sortWords = (column) => {
      store.commit("sortWords",column)
    }
  
    return{wordList,addWordToWordList,sortWords,}
  }
}

</script>

<style>
  .poolTableDiv{
    height: 85vh;
  }
  .table-wrapper {
    width: 50vw;
  }
  .disabled-link{
    color: #ddd;
    /* cursor:no-drop;  */
    /* cursor: not-allowed; */
    pointer-events: none;
  }
</style>