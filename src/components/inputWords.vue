<template>
    <div class=" mt-10 w-11/12 m-auto">
        <div class="flex justify-between">
            <input v-model="$store.state.targetLanguage" class="pl-2 p-1 border border-indigo-600 rounded mr-5 w-1/6" :placeholder="store.state.userSettings.targetLanguage+'...'" type="text" name="" id="targetLanguage">
            <input v-model="$store.state.firstLanguage" class="pl-2 p-1 border border-indigo-600 rounded mr-5 w-1/6" type="text" :placeholder="store.state.userSettings.firstLanguage+'...'" name="" id="firstLanguage">
            <input v-model="$store.state.sentence" class="pl-2 p-1 border border-indigo-600 rounded mr-5 w-1/2" type="text" placeholder="Example Sentence..." name="" id="sentence">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded lg:\mt-6" @click="saveWord">Save</button>
        </div>
    </div>
</template>

<script>
import {useStore} from "vuex"

export default {
    props:{
        word:Object
    },
    setup() {
        const store=useStore();
       
        // const editWordtoWatch=ref(props.word)
        // watch(editWordtoWatch,(word) => console.log('edit Input!!!!!!!!!!!!!!!!!!!!! :>> ', word))
        const saveWord=()=>{
            const word={
                targetLanguage:store.state.targetLanguage,
                firstLanguage:store.state.firstLanguage,
                sentence:store.state.sentence,
                rating:0,
                id:Date.now()
            }
            store.state.targetLanguage="";
            store.state.firstLanguage="",
            store.state.sentence="";
            console.log('word :>> ', word);
            store.state.wordList.push(word);
            store.commit("saveWordData")
        }
        return{saveWord,store}
    }
}
</script>