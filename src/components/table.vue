<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class=" flex flex-col mt-10">
  <div class="-my-2 flex justify-center">
    <div class="w-11/12 py-2 align-middle inline-block  sm:px-6 lg:px-4">
      <div class="tableDiv shadow overflow-y-auto border-b border-gray-200 sm:rounded-lg">
        <table class="divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
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
              <th scope="col" class=" w-5/12 sentence px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Beispiel Satz
              </th>
              <th scope="col" class="w-1/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lernniveau
              </th>
              <th scope="col" class=" w-1/12 px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
              <th scope="col" class=" w-1/12 px-6 py-3">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="word in wordList" :key="word">
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
              <td class=" px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <i v-for="star in word.rating" :key="star.id" class="fas fa-star"></i>
              </td>
              <td @click="editWord(word)"   class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button :class="$store.state.isDisabled" class="text-indigo-600 hover:text-indigo-900">Edit</button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button :class="$store.state.isDisabled" @click="deleteWord(word)" class="text-indigo-600 hover:text-indigo-900">Delete</button>
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
    const deleteWord=(word)=>{
      if(store.state.isEditEnable==true){
        console.log('store.state.wordList :>> ', store.state.wordList);
        store.state.wordList = store.getters.wordList.filter((e)=>e.id!=word.id)
        store.commit("saveWordData");
      }
    }
    const editWord=(word=>{
      if(store.state.isEditEnable==true){
        store.state.targetLanguage=word.targetLanguage;
        store.state.firstLanguage=word.firstLanguage;
        store.state.sentence=word.sentence;
        store.state.isDisabled="disabled-link";
        store.state.wordList = store.getters.wordList.filter((e)=>e.id!=word.id)
        store.state.isEditEnable=false;
      }
    })
    // to send this emit to the parent (home) component
    // const editWord=(word)=>{
    //   emit("editWord",word)
    // }
    return{wordList,sortWords,deleteWord,editWord}
  }
}

</script>

<style>
  .tableDiv{
    height: 70vh;
  }
  .table-wrapper {
    width: 50vw;
    background: red;
  }
  .disabled-link{
    color: #ddd;
    /* cursor:no-drop;  */
    /* cursor: not-allowed; */
    pointer-events: none;
  }
</style>