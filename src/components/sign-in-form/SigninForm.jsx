import FormInput from "../form-input/FormInput";
import React,{useState} from 'react';
import Button from "../button/Button";

import { createUserDocumentFromAuth, signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import "./signin.styles.scss"

const defaultFormFields ={
  email:"",
  password:"",
 }
 

const SigninForm = () => {

 const [formFields,setFormFields] = useState(defaultFormFields)
 const {email,password} = formFields
 

 const handleChange = (e)=>{
  const {name,value} = e.target
  setFormFields({...formFields,[name]:value})
 }

 const signInWithGoogle =async()=>{
  await signInWithGooglePopup();
  
 }

  const resetFormFields =()=>{
    setFormFields(defaultFormFields)
  }
 const handleSubmit=async (e)=>{
  e.preventDefault()
  try{
    await signInAuthUserWithEmailAndPassword(email,password)
    resetFormFields()

  }catch(error){
    switch(error.code){
      case "auth/wrong-password":
        alert("incorrect password for email");
        break;
      case "auth/user-not-found":
      alert("no user associated with this email")
      break;
      default:
        console.log(error)
    }
  }
 }
  
 
  return (
    <div className="sign-in-container">
     <h2>Already have an account?</h2>
     <form onSubmit={handleSubmit}>
      <FormInput 
      label="Email" 
      type="email"  
      name="email" 
      value={email} 
      onChange={handleChange} />
      <FormInput 
      label="Password" 
      type="password"  
      name="password" 
      value={password} 
      onChange={handleChange} />
      <div className="buttons-container">
        <Button  type='submit'>Sign in</Button>
        <Button type="button" btnType="google" onClick={signInWithGoogle}>Google sign in</Button>
      </div>
      
     </form>
    </div>
  )
}

export default SigninForm