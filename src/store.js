import {
    createStore
} from "vuex"
import {
    getFirestore
} from "firebase/firestore";
import {
    collection,
    getDoc,
    getDocs,
    doc,
    setDoc
} from "firebase/firestore";
// import { useAuthState } from './firebase';
import {
    getAuth
} from 'firebase/auth'
import {
    ref
} from 'vue'

const db = getFirestore();

function sortDataAZ(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}
const store = createStore({
    state: {
        generalWordList: ref([]),
        organizedWordList: ref([]),
        wordList: ref([]),
        tempCardList: ref([]),
        userSettings: ({}),
        user: null,
        targetLanguage: ref(""),
        firstLanguage: ref(""),
        sentence: ref(""),
        isDisabled: ref(""),
        isEditEnable: ref(true),
        showAnswer: ref(false),
        correct: ref(false),
        wrong: ref(false),
        answer: ref(""),
        animatedStar: ref(false),
        navigation : [
            { name: 'HomePage', href: '/', current: true },
            { name: 'Word List', href: '/wordList', current: false },
            { name: 'Cards', href: '/cards', current: false },
            { name: 'Word Pool', href: '/pool', current: false }
          ]
    },
    getters: {
        wordList: state => state.wordList,
        tempCardList: state => state.tempCardList,
        generalWordList: state => state.generalWordList,
        navigation:state=>state.navigation
    },
    mutations: {
        async getAllData(state) {
            state.generalWordList = [];
            state.organizedWordList = [];

            const auth = getAuth()
            const docRef =  doc(db, "words",auth.currentUser.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                state.userSettings=docSnap.data().userSettings;
            }
            else console.log("No such document!");

            const querySnapshot = await getDocs(collection(db, "words"));
            querySnapshot.forEach((doc) => {
                state.generalWordList.push(doc.data());
            })
        },

        async getData(state) {
            const auth = getAuth()
            const docRef = doc(db, "words", auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                state.wordList = docSnap.data().wordList
                state.tempCardList = [...state.wordList]; //!!!!added wordlist to tempCardList
                state.userSettings = docSnap.data().userSettings;
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            // }
            state.wordList.sort(sortDataAZ("targetLanguage"));
        },
        async saveWordData(state) {
            const wordsRef = collection(db, "words");
            //wordsRef, doc Id, data Obj
            state.isDisabled = "";  //to controll the buttons

            const auth = getAuth()
            const data = {
                userSettings: state.userSettings,
                wordList: state.wordList
            }
            await setDoc(doc(wordsRef, `${auth.currentUser.uid}`), data);
            state.isEditEnable = true;
        },
        addWordFromGeneralWordListToWordList(state, word) {
            word.id = Date.now();
            state.wordList.push(word);
            store.commit("saveWordData");
            store.commit("getData");
        },
        sortWords(state, column) {
            state.wordList.sort(sortDataAZ(column));
        }

    },
})
export default store;