<template>
  <div class="h-screen flex justify-center items-center">
    <div class="p-6 rounded-lg shadow-lg bg-white max-w-md">
      <!-- <form> -->
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput125"
            placeholder="Name"
            v-model="firstName"
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput126"
            placeholder="Surname"
            v-model="lastName"
          />
        </div>
        <div class="flex">
          <div class="grid grid-cols-1 mr-5">
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                  <label for="first-language">First Language</label>
                <select id="first-language"
                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example" v-model="firstLanguage"
                > 
                    <option selected>---</option>
                    <option value="English">English</option>
                    <option value="German">German</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Chinese">Chinese</option>
                </select>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1">
            <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                  <label  for="target-language">Target Language</label>
                <select
                    id="target-language"
                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example" v-model="targetLanguage"
                >
                    <option selected>---</option>
                    <option value="English">English</option>
                    <option value="German">German</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Turkish">Turkish</option>
                    <option value="Chinese">Chinese</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button @click="nextPage"
          class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Save
        </button>
      <!-- </form> -->
    </div>
  </div>
</template>


<script>
import { useRouter } from 'vue-router'
import {useStore} from 'vuex';
import {ref} from "vue"
export default {
    setup() {
        const router = useRouter();
        const store = useStore();
        const firstName=ref("");
        const lastName=ref("");
        const firstLanguage=ref("");
        const targetLanguage=ref("");
        
        const nextPage=()=>{
            const userSettings = {
                firstName:firstName.value,
                lastName:lastName.value,
                firstLanguage:firstLanguage.value,
                targetLanguage:targetLanguage.value
            }
            store.state.userSettings = userSettings;
            store.commit("saveWordData")
            router.push('/');
        }
        return {nextPage,firstName,lastName,firstLanguage,targetLanguage}
    }
}
</script>
