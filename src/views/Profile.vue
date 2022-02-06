<template>
  <div class="bg-gray-100 h-screen">
    <Navbar />
    <div class="">
      <div class="mx-auto p-5 flex justify-center">
        <div class="md:flex no-wrap md:-mx-2">
          <!-- Right Side -->
          <div class="w-full mx-2 h-64">
            <!-- Profile tab -->
            <!-- About Section -->
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div
                class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
              >
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">{{state.userSettings.firstName}}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">{{state.userSettings.lastName}}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Language</div>
                    <div class="px-4 py-2">{{state.userSettings.firstLanguage}}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Target Language</div>
                    <div class="px-4 py-2">{{state.userSettings.targetLanguage}}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800" href="mailto:jane@example.com">{{
                        state?.user?.email
                      }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End of about section -->

            <div class="my-4"></div>

            <!-- Informations About Your Vocabulary -->
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="grid grid-cols-2">
                <div>
                  <div
                    class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                  >
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide"
                      >Informations About Your Vocabulary</span
                    >
                  </div>
                  <div>
                    <ul class="list-inside space-y-2 mb-5">
                      <li>
                        <div class="text-teal-600">Your Total Words</div>
                        <div class="text-gray-500 text-xs">
                          {{ state.wordList.length }}
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="flex justify-between">
                    <div>
                      <ul class="list-inside space-y-2">
                        <li>
                          <div class="text-teal-600">5 Star (You learned)</div>
                          <div class="text-gray-500 text-xs">
                            {{ getRating(5) }}
                          </div>
                        </li>
                        <li>
                          <div class="text-teal-600">4 Star</div>
                          <div class="text-gray-500 text-xs">
                            {{ getRating(4) }}
                          </div>
                        </li>
                        <li>
                          <div class="text-teal-600">3 Star</div>
                          <div class="text-gray-500 text-xs">
                            {{ getRating(3) }}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div>
                        <ul class="list-inside space-y-2">
                          <li>
                            <div class="text-teal-600">2 Star</div>
                            <div class="text-gray-500 text-xs">
                              {{ getRating(2) }}
                            </div>
                          </li>
                          <li>
                            <div class="text-teal-600">1 Star</div>
                            <div class="text-gray-500 text-xs">
                              {{ getRating(1) }}
                            </div>
                          </li>
                          <li>
                            <div class="text-teal-600">
                              0 Star (Your new words)
                            </div>
                            <div class="text-gray-500 text-xs">
                              {{ getRating(0) }}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End of Experience and education grid -->

            <!-- Informations About Our Vocabulary Pool-->
            <div class="bg-white p-3 shadow-sm rounded-sm mt-4">
              <div class="grid grid-cols-2">
                <div>
                  <div
                    class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                  >
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide"
                      >Informations About Our Vocabulary Pool</span
                    >
                  </div>
                  <div>
                    <ul class="list-inside space-y-2">
                      <li>
                        <div class="text-teal-600">Your Total Words:</div>
                        <div class="text-gray-500 text-xs">150</div>
                      </li>
                    </ul>
                  </div>
                  <div class="flex justify-between">
                    <div>
                      <ul class="list-inside space-y-2">
                        <li>
                          <div class="text-teal-600">You learned:</div>
                          <div class="text-gray-500 text-xs">25</div>
                        </li>
                        <li>
                          <div class="text-teal-600">4 Star</div>
                          <div class="text-gray-500 text-xs">25</div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div>
                        <ul class="list-inside space-y-2">
                          <li>
                            <div class="text-teal-600">2 Star</div>
                            <div class="text-gray-500 text-xs">25</div>
                          </li>
                          <li>
                            <div class="text-teal-600">1 Star</div>
                            <div class="text-gray-500 text-xs">25</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import { useStore } from 'vuex'
// import { computed } from '@vue/reactivity';

export default {
  components: { Navbar },
  setup() {
    const { state } = useStore()
    const getRating = rating => {
      return state.wordList.filter(e => e.rating == rating).length
    }
    return { state, getRating }
  }
}
</script>

<style>
:root {
  --main-color: #4a76a8;
}

.bg-main-color {
  background-color: var(--main-color);
}

.text-main-color {
  color: var(--main-color);
}

.border-main-color {
  border-color: var(--main-color);
}
</style>
