<template>
    <div class=" mt-10 px-10">
        <div class="flex justify-between">
            <input v-model="german" class="pl-2 p-1 border border-indigo-600 rounded mr-5 w-1/6" placeholder="deutsch..." type="text" name="" id="german">
            <input v-model="turkish" class="pl-2 p-1 border border-indigo-600 rounded mr-5 w-1/6" type="text" placeholder="turkisch..." name="" id="turkish">
            <input v-model="sentence" class="pl-2 p-1 border border-indigo-600 rounded mr-5 w-1/2" type="text" placeholder="beispiel Satz..." name="" id="sentence">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded lg:\mt-6" @click="saveWord">Save</button>
        </div>
    </div>
</template>

<script>
import {useStore} from "vuex"
import {ref} from 'vue'
export default {
    setup() {
        const store=useStore();
        const german=ref("");
        const turkish=ref("");
        const sentence=ref("");

        const saveWord=()=>{
            const word={
                german:german.value,
                turkish:turkish.value,
                sentence:sentence.value,
                id:Date.now()
            }
            german.value="";
            turkish.value="",
            sentence.value="";
            console.log('word :>> ', word);
            store.commit("saveWordData",word)
        }
        return{german,turkish,sentence,saveWord}
    }
}
</script>