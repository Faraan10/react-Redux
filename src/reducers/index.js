import counter from './counter'

import {combineReducers} from 'redux'

const allReducers=combineReducers({
	counter:counter
	//going to call in actions side: imported one
})
export default allReducers