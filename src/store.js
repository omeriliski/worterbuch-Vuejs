import {
    createStore
} from "vuex"
import {
    getFirestore
} from "firebase/firestore";
import {
    collection,
    getDocs,
    doc,
    setDoc
} from "firebase/firestore";
const db = getFirestore();


function sortDataAZ(prop){
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
        wordList: []
    },
    getters: {
        wordList: state => state.wordList
    },
    mutations: {
        async getData(state) {
            if(state.wordList.length==0){
                const querySnapshot = await getDocs(collection(db, "words"));
                querySnapshot.forEach((doc) => {
                    state.wordList.push(doc.data())
                });
            }
            state.wordList.sort(sortDataAZ("german"));
        },
        async saveWordData(state,wordObj){
            console.log('wordObj :>> ', wordObj);
            const wordsRef = collection(db, "words");
            //wordsRef, doc Id, data Obj
            state.wordList.push(wordObj);
            await setDoc(doc(wordsRef, `word${wordObj.id}`),wordObj);
        },
        sortWords(state,column){
            state.wordList.sort(sortDataAZ(column));
        }
    },
})
export default store;