import { Button } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ButtonBack, ButtonContinue, ButtonForgotPassword, ButtonLogin, ButtonLogInFB, ButtonLoginGoogle, ButtonLogInX, ButtonPreferences, ButtonSignUp, ButtonSignUpFB, ButtonSignUpGoogle, ButtonSignUpX, InputBoxes, RememberCheck, ButtonCancel, TermsCheck } from '../LoginPageComponents'



const LoginStartPage = () => {
  return (
    <>
      <div className='pt-50 flex-column justify-self-center'>
        <ButtonLogin/>
        <ButtonSignUp/>
      </div>
    </>
  )
}

const LoginMain = () => {
  return (
    <div className='grid gap-3'>
      <InputBoxes setFormtype='Username/Email' setVar=''/>
      <InputBoxes setFormtype='Password' setVar=''/>
      <RememberCheck/>
      <ButtonLogin />
      <ButtonLoginGoogle/>
      <ButtonLogInFB/>
      <ButtonLogInX/>
    </div>
  )
}

const SignUpPage1 = () => {
  return (
    <div className='grid gap-3'>
      <InputBoxes setFormtype='Name' setVar=''/>
      <InputBoxes setFormtype='Username' setVar=''/>
      <InputBoxes setFormtype='Email' setVar=''/>
      <InputBoxes setFormtype='Password' setVar=''/>
      <ButtonSignUpGoogle/>
      <ButtonSignUpFB/>
      <ButtonSignUpX/>
      <ButtonContinue/>
      <ButtonCancel/>
    </div>
  )
}

const SignUpPage2 = () => {
  return (
    <div className='grid gap-3'>
      <InputBoxes setFormtype='Phone Number' setVar=''/>
      <InputBoxes setFormtype='Date of Birth*' setVar=''/>
      <InputBoxes setFormtype='Email' setVar=''/>
      <InputBoxes setFormtype='Password' setVar=''/>
      <TermsCheck/>
      <ButtonContinue/>
      <ButtonBack/>
    </div>
  )
}

const SignUpPage3 = () => {
  return(
    <div>

    </div>
  )
}

const SignUpPage4 = () => {
  return(
    <div className='grid grid-cols-5 gap-5'>
      <ButtonPreferences imageDescription='Test' imageSrc='/images/PreferencesImages/image-1.png'/>
      <ButtonPreferences imageDescription='Tes1' imageSrc='/images/PreferencesImages/image-2.png'/>
      <ButtonPreferences imageDescription='Tes2' imageSrc='/images/PreferencesImages/image-3.png'/>
      <ButtonPreferences imageDescription='Test' imageSrc='/images/PreferencesImages/image-4.png'/>
      <ButtonPreferences imageDescription='Tes1' imageSrc='/images/PreferencesImages/image-5.png'/>
      <ButtonPreferences imageDescription='Tes2' imageSrc='/images/PreferencesImages/image-6.png'/>
      <ButtonPreferences imageDescription='Test' imageSrc='/images/PreferencesImages/image-7.png'/>
      <ButtonPreferences imageDescription='Tes1' imageSrc='/images/PreferencesImages/image-8.png'/>
      <ButtonPreferences imageDescription='Tes2' imageSrc='/images/PreferencesImages/image-9.png'/>
      <ButtonPreferences imageDescription='Test' imageSrc='/images/PreferencesImages/image-10.png'/>
      <ButtonPreferences imageDescription='Tes1' imageSrc='/images/PreferencesImages/image-11.png'/>
      <ButtonPreferences imageDescription='Tes2' imageSrc='/images/PreferencesImages/image-12.png'/>
      <ButtonPreferences imageDescription='Test' imageSrc='/images/PreferencesImages/image-13.png'/>
      <ButtonPreferences imageDescription='Tes1' imageSrc='/images/PreferencesImages/image-14.png'/>
      <ButtonPreferences imageDescription='Tes2' imageSrc='/images/PreferencesImages/image-15.png'/>
    </div>
  )
}


export { LoginStartPage, LoginMain, SignUpPage1, SignUpPage2, SignUpPage3, SignUpPage4 }
