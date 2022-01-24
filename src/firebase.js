import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { initializeApp } from 'firebase/app'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyC-hmHvg3ei-nqf2-tUmG9UmbX04Raiwmk",
  authDomain: "mein-worterbuch-2a463.firebaseapp.com",
  databaseURL: "https://mein-worterbuch-2a463-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mein-worterbuch-2a463",
  storageBucket: "mein-worterbuch-2a463.appspot.com",
  messagingSenderId: "377846506913",
  appId: "1:377846506913:web:049e48cdc76b69f50757e0"
})
export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  )

export const useAuthState = () => {
  const user = ref(null)
  const error = ref(null)

  const auth = getAuth()
  let unsubscribe
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e)
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return {user, error, isAuthenticated }
}
