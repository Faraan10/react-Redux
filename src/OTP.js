import {useState} from 'react'
import firebase from './firebaseConfig'

export default function OTP(){
	const [inputRead,setInputRead]=useState()
	function generateOTP(){
		let recaptcha=new firebase.auth.RecaptchaVerifier("recaptcha");
		firebase.auth().signInWithPhoneNumber(inputRead,recaptcha).then(function(e){
			let code=prompt("Enter the otp");
			if(code==null) return;
			e.confirm(code).then(function(result){
				alert("Entered otp is true and your are correct user");
			}).catch((error)=>{
				alert("You entered the wrong otp. So please check for new otp");
			})
		})

	}
	return(
		<div>
			<input 
				placeholder="enter the mobile number"
				onChange={(e)=>{setInputRead(e.target.value)}}/>
			<button onClick={generateOTP}>Send</button>
			<p id="recaptcha"></p>
		</div>
		)
}