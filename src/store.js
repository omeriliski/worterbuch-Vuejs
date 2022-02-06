import {createStore} from "vuex"
import {getFirestore} from "firebase/firestore";
import {collection,getDoc,doc,setDoc} from "firebase/firestore";
// import { useAuthState } from './firebase';
import { getAuth } from 'firebase/auth'
import {ref} from 'vue'
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
        wordList: ref([]),
        tempCardList:ref([]),  
        user:null,
        german:ref(""),
        turkish:ref(""),
        sentence:ref(""),
        isDisabled:ref(""),
        isEditEnable:ref(true),
        showAnswer:ref(false),
        correct:ref(false),
        wrong:ref(false),
        answer:ref(""),
        animatedStar:ref(false)
    },
    getters: {
        wordList: state => state.wordList,
        tempCardList: state => state.tempCardList,
    },
    mutations: {
        async getData(state) {
            // if(state.wordList.length==0){
                // const { user } = useAuthState()
                const auth = getAuth()
                console.log('Store user :>> ', auth.currentUser);
                const docRef =  doc(db, "words",auth.currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    // console.log("Document data:", docSnap.data().wordList);
                    state.wordList = docSnap.data().wordList
                    state.tempCardList=[...state.wordList];     //!!!!!!!!!!!!!!!!!!!!!!added wordlist to tempCardList
                    // console.log('state.tempCardList :>> ', state.tempCardList);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
            // }
            state.wordList.sort(sortDataAZ("german"));
        },
        async saveWordData(state){
            const wordsRef = collection(db, "words");
            //wordsRef, doc Id, data Obj
            console.log('state.user :>> ', state.user);
            state.isDisabled="";
            await setDoc(doc(wordsRef, `${state.user.uid}`),{wordList:state.wordList});
            state.isEditEnable=true;
        },
        sortWords(state,column){
            state.wordList.sort(sortDataAZ(column));
        }
    },
})
export default store;