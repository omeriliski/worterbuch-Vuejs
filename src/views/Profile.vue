<template>
  <div class="bg-gray-100 h-screen"> 
    <Navbar />
    <div >
      <!-- End of Navbar -->

      <div class="container mx-auto p-5">
        <div class="md:flex no-wrap md:-mx-2">
          <!-- Left Side -->
          <div class="w-full md:w-3/12 md:mx-2">
            <!-- Profile Card -->
            <div class="bg-white p-3 border-t-4 border-green-400">
              <div class="image overflow-hidden">
                <img class="h-96 w-full mx-auto" src="https://scontent-muc2-1.xx.fbcdn.net/v/t1.18169-9/10382757_1378596799130428_5309769796455625867_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kpurWcSy_ygAX-s6GlQ&_nc_ht=scontent-muc2-1.xx&oh=00_AT-zozZosTaybl52kVXYLD1Rn0WYy9Sriv_tJWpP_7Kx4Q&oe=6215CA7F" alt="" />
              </div>
              <div class="mt-4 flex justify-between">
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                Jane Doe
              </h1>
              <button class=" relative py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">Upload Your Picture</button>
              </div>
              <ul
                class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
              >
                <li class="flex items-center py-3">
                  <span>Status</span>
                  <span class="ml-auto"
                    ><span
                      class="bg-green-500 py-1 px-2 rounded text-white text-sm"
                      >Active</span
                    ></span
                  >
                </li>
                <li class="flex items-center py-3">
                  <span>Member since</span>
                  <span class="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>
            <!-- End of profile card -->
            <div class="my-4"></div>
            <!-- Friends card -->
            <!-- <div class="bg-white p-3 hover:shadow">
              <div
                class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8"
              >
                <span class="text-green-500">
                  <svg
                    class="h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>Similar Profiles</span>
              </div>
              <div class="grid grid-cols-3">
                <div class="text-center my-2">
                  <img
                    class="h-16 w-16 rounded-full mx-auto"
                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                    alt=""
                  />
                  <a href="#" class="text-main-color">Kojstantin</a>
                </div>
                <div class="text-center my-2">
                  <img
                    class="h-16 w-16 rounded-full mx-auto"
                    src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
                    alt=""
                  />
                  <a href="#" class="text-main-color">James</a>
                </div>
                <div class="text-center my-2">
                  <img
                    class="h-16 w-16 rounded-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  />
                  <a href="#" class="text-main-color">Natie</a>
                </div>
                <div class="text-center my-2">
                  <img
                    class="h-16 w-16 rounded-full mx-auto"
                    src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                    alt=""
                  />
                  <a href="#" class="text-main-color">Casey</a>
                </div>
              </div>
            </div> -->
            <!-- End of friends card -->
          </div>
          <!-- Right Side -->
          <div class="w-full md:w-9/12 mx-2 h-64">
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
                    <div class="px-4 py-2">Jane</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">Doe</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Language</div>
                    <div class="px-4 py-2"></div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">
                      Second (target) Language
                    </div>
                    <div class="px-4 py-2"></div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800" href="mailto:jane@example.com"
                        >{{state?.user?.email}}</a
                      >
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
                    <ul class="list-inside space-y-2">
                        <li>
                          <div class="text-teal-600">Your Total Words:</div>
                          <div class="text-gray-500 text-xs">{{state.wordList.length}}</div>
                        </li>
                    </ul>
                  </div>
                  <div class=" flex justify-between">
                    <div>
                      <ul class="list-inside space-y-2">
                        
                        <li>
                          <div class="text-teal-600">You learned:</div>
                          <div class="text-gray-500 text-xs">{{getRating(5)}}</div>
                        </li>
                        <li>
                          <div class="text-teal-600">4 Star</div>
                          <div class="text-gray-500 text-xs">{{getRating(4)}}</div>
                        </li>
                        <li>
                          <div class="text-teal-600">3 Star</div>
                          <div class="text-gray-500 text-xs">{{getRating(3)}}</div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div>
                        <ul class="list-inside space-y-2 ">
                          
                          <li>
                            <div class="text-teal-600">
                              2 Star
                            </div>
                            <div class="text-gray-500 text-xs">
                              {{getRating(2)}}
                            </div>
                          </li>
                          <li>
                            <div class="text-teal-600">
                              1 Star
                            </div>
                            <div class="text-gray-500 text-xs">
                              {{getRating(1)}}
                            </div>
                          </li>
                          <li>
                            <div class="text-teal-600">
                              Your new words
                            </div>
                            <div class="text-gray-500 text-xs">
                              {{getRating(0)}}
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
                  <div class=" flex justify-between">
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
                        <ul class="list-inside space-y-2 ">
                          
                          <li>
                            <div class="text-teal-600">
                              2 Star
                            </div>
                            <div class="text-gray-500 text-xs">
                              25
                            </div>
                          </li>
                          <li>
                            <div class="text-teal-600">
                              1 Star
                            </div>
                            <div class="text-gray-500 text-xs">
                              25
                            </div>
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
import { useStore } from 'vuex';
// import { computed } from '@vue/reactivity';

export default {
  components: { Navbar },
  setup() {
    const {state} = useStore()
    const getRating = (rating)=>{
      return state.wordList.filter((e)=>e.rating==rating).length
    }
    return{state,getRating}
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
