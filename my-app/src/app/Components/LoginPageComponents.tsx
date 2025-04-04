import { Input } from '@/hooks/components/ui/input'
import { Checkbox } from "@/components/ui/checkbox"
import { Button, Label } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

//For these buttons, you could probably add an extra component that will let you manipulate where the href takes you

const ButtonLogin = () => {
  return (
    <div className='mb-3'>
                <Button className='rounded-md bg-blue-200 hover:bg-blue-400 text-black w-full inter'>
                <Link href="/">Login</Link>
                </Button>
              </div>
  )
}

const ButtonSignUp = () => {
    return (
        <div className='mb-3'>
            <Button className='rounded-md bg-transparent hover:bg-transparent text-blue-200 hover:text-blue-400 border-4 border-blue-200 hover:border-blue-400 w-full inter'>
            <Link href="/">Sign Up</Link>
            </Button>
        </div>
    )
}

const ButtonForgotPassword = () =>
{
    return (
        <div>
            <Button className='text-blue-200 hover:text-blue-400 p-0 bg-transparent hover:bg-transparent w-full inter'>
                <h1>Forgot Password?</h1>
            </Button>
        </div>
    )
}

const ButtonSignUpGoogle = () => {
    return (
        <div className='justify-items-center'>
            <Button className='bg-red-500 hover:bg-red-600 inter w-full grid grid-cols-3 my-1.5'>
                <h1 className='col-span-2 text-start'>Sign Up Using Gmail</h1>
                <Image src={"/icons/google.svg"} alt='icon-google' width={30} height={30} className='justify-self-end'/>
            </Button>
        </div>
    )
}

const ButtonLoginGoogle = () => {
    return (
        <div className='justify-items-center'>
            <Button className='bg-red-500 hover:bg-red-600 inter w-full grid grid-cols-3 my-1.5'>
                <h1 className='col-span-2 text-start'>Log In Using Gmail</h1>
                <Image src={"/icons/google.svg"} alt='icon-google' width={30} height={30} className='justify-self-end'/>
            </Button>
        </div>
    )
}

const ButtonSignUpFB = () => {
    return (
        <div className='justify-items-center'>
            <Button className='bg-blue-500 hover:bg-blue-600 inter w-full grid grid-cols-3 my-1.5'>
                <h1 className='col-span-2 text-start'>Sign Up Using Facebook</h1>
                <Image src={"/icons/facebook.svg"} alt='icon-google' width={30} height={30} className='justify-self-end invert'/>
            </Button>
        </div>
    )
}

const ButtonLogInFB = () => {
    return (
        <div className='justify-items-center'>
            <Button className='bg-blue-500 hover:bg-blue-600 inter w-full grid grid-cols-3 my-1.5'>
                <h1 className='col-span-2 text-start'>Log In Using Facebook</h1>
                <Image src={"/icons/facebook.svg"} alt='icon-google' width={30} height={30} className='justify-self-end invert'/>
            </Button>
        </div>
    )
}

const ButtonSignUpX = () => {
    return (
        <div className='justify-items-center'>
            <Button className='bg-black hover:bg-gray-800 inter w-full grid grid-cols-3 my-1.5'>
              <h1 className='col-span-2 text-start'>Sign Up Using X</h1>
              <Image src={"/icons/twitter-x.svg"} alt='icon-google' width={30} height={30} className='justify-self-end invert'/>
            </Button>
        </div>
    )
}

const ButtonLogInX = () => {
    return (
        <div className='justify-items-center'>
            <Button className='bg-black hover:bg-gray-800 inter w-full grid grid-cols-3 my-1.5'>
              <h1 className='col-span-2 text-start'>Log In Using X</h1>
              <Image src={"/icons/twitter-x.svg"} alt='icon-google' width={30} height={30} className='justify-self-end invert'/>
            </Button>
        </div>
    )
}

const ButtonContinue = () => {
    return (
        <div className='mb-1.5 mt-10'>
            <Button className='rounded-md bg-blue-200 hover:bg-blue-400 text-black w-full inter'>
            <Link href="/">Continue</Link>
            </Button>
          </div>
    )
} 

const ButtonCancel = () => {
    return (
        <div className='mb-1.5'>
            <Button className='rounded-md bg-blue-200 hover:bg-blue-400 text-black w-full inter'>
            <Link href="/">Cancel</Link>
            </Button>
          </div>
    )
} 

const ButtonBack = () => {
    return (
        <div className='mb-1.5'>
        <Button className='rounded-md bg-blue-200 hover:bg-blue-400 text-black w-full inter'>
        <Link href="/">Back</Link>
        </Button>
      </div>
    )
}

type ButtonPreferencesProps = {
    imageDescription: string
    imageSrc: string;
}

const ButtonPreferences = ({ imageDescription, imageSrc }: ButtonPreferencesProps) => {
    return (
        <Button href='/' className='h-25 w-28 p-0 rounded-3xl bg-transparent hover:bg-transparent hover:border-8 border-blue-200'>
            <h1 className='inter text-white absolute font-extrabold text-2xl'>{imageDescription}</h1>
            <Image src={imageSrc} alt={`icon${imageDescription}`} width={200} height={200} />
        </Button>
    )
}

type InputBoxesProps = {
    setFormtype: string;
    setVar: string;
}

const InputBoxes = ({ setFormtype, setVar }: InputBoxesProps) => {
    //setVar can be used to set the variable for usernames, passwords, etc, to be salt and hash'd
    return(
        <div>
            <h1 className='inter text-gray-400'>{setFormtype}</h1>
            <Input type='text' min={6} max={20} className='inter'/>
        </div>
    )
}

const RememberCheck = () => {
    return (
        <div className='flex justify-items-start space-x-2'>
            <Checkbox id='rememberme'/>
            <Label htmlFor='rememberme' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inter'>Stay Signed In</Label>
        </div>
    )
}

const TermsCheck = () => {
    return (
        <div className='flex justify-items-start space-x-2'>
            <Checkbox id='rememberme'/>
            <Label htmlFor='rememberme' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inter'>I have read and agreed to PlatO <a href='/' className='text-blue-500 hover:text-blue-300 focus:text-purple-500 underline'>Terms and Conditions</a></Label>
        </div>
    )
}


export { ButtonLogin, ButtonSignUp, ButtonForgotPassword, ButtonSignUpGoogle, ButtonSignUpFB, ButtonSignUpX, ButtonContinue, ButtonCancel, ButtonBack, ButtonPreferences, InputBoxes, RememberCheck, ButtonLoginGoogle, ButtonLogInFB, ButtonLogInX, TermsCheck }
