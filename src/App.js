import {useState} from 'react'

function App(){
  const [demo,setDemo]=useState("Angular")
  const [id,setId]=useState(12)
  const [userData,setUserData]=useState()

  function handleSubmit(){
    console.log(userData)
  }
  return(
    <div>
      <h2>About {demo} hooks </h2>
      <p>{id}</p>
      <input
        placeholder="Enter username"
        onChange={(e)=>{setUserData(e.target.value)}}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
    )
}
export default App