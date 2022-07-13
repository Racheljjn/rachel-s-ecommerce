import React,{useState} from 'react';
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import FormInput from '../form-input/FormInput';
import "./signup.styles.scss";
import Button from "../button/Button"

const defaultFormFields ={
  displayName:"",
  email:"",
  password:"",
  confirmPassword:""
 }

const SignupForm = () => {
 const [formFields,setFormFields] = useState(defaultFormFields)
 const {displayName,email,password,confirmPassword} = formFields

 const handleChange = (e)=>{
  const {name,value} = e.target
  setFormFields({...formFields,[name]:value})
 }
 const handleSubmit=async (e)=>{
  e.preventDefault()
  if(password !== confirmPassword)
  {alert("passwords don't match") 
  return;
  }

  const resetFormFields =()=>{
    setFormFields(defaultFormFields)
  }
  try{
    const {user} = await createAuthUserWithEmailAndPassword(email,password)
    await createUserDocumentFromAuth(user,{displayName})
    resetFormFields()
    

  }catch(error){
    if(error.code === "auth/email-already-in-use"){
      alert("cannot create user, email already in use")
    }else{
    console.error("user creation encountered an error", error)

    }

  }
  
  
 }
 
 
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
     <form onSubmit={handleSubmit}>
      <FormInput 
      label="Display Name"
      type="text"  
      name="displayName" 
      value={displayName} 
      onChange={handleChange}
      />
      <FormInput 
      label="Email"
      type="email" 
      name="email" 
      value={email}  
      onChange={handleChange}
      />
      <FormInput 
      label="Password"
      type="password"  
      name="password" 
      value={password}  
      onChange={handleChange}
      />
      <FormInput 
      label="Confirm Password"
      type="password"  
      name="confirmPassword" 
      value={confirmPassword}  
      onChange={handleChange}
      />
      <Button type='submit'>Sign Up</Button>
     </form>
    </div>
  )
}

export default SignupForm