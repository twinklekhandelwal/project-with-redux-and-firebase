import Authreducer from './authreducer'
import Projectreducer from './projectreducer'
import { combineReducers } from 'redux';
import{firestoreReducer} from 'redux-firestore'
// console.log(Projectreducer, "KJ")
const rootreducer = combineReducers({
    auth: Authreducer,
    project: Projectreducer,
    firestore:firestoreReducer
})
export default rootreducer;