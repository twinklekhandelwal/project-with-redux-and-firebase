import Authreducer from './authreducer'
import Projectreducer from './projectreducer'
import { combineReducers } from 'redux';

// console.log(Projectreducer, "KJ")
const rootreducer = combineReducers({
    auth: Authreducer,
    project: Projectreducer
})
export default rootreducer;