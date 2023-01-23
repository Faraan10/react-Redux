import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,reset} from './actions'
import OTP from './OTP'

function App1(){
	const count=useSelector(state=>state.counter)
	const dispatch=useDispatch()
	return(
		<div>
			from App1
			<h1>Counter is:{count}</h1>
			<button onClick={()=>{dispatch(increment())}}>+</button>	
			<button onClick={()=>{dispatch(decrement())}}>-</button><br/><br/>
			<button onClick={()=>{dispatch(reset())}}>reset</button><br/><br/>
			<OTP/>
		</div>
		)
}
export default App1