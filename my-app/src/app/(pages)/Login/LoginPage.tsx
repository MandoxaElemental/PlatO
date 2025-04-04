import { LoginMain, LoginStartPage, SignUpPage1, SignUpPage2, SignUpPage3, SignUpPage4 } from '@/app/Components/LoginComponents/Pages';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <>
      <div className='loginBG w-screen h-screen flex items-center justify-center'> 
        <div className='grid grid-cols-1 max-w-[80%] gap-3 align-self-center justify-self-center'>
          <div className='justify-items-center'>
            <Image src={`/images/Logo.png`} alt="logo" width={400} height={400}/>  
          </div>
          <div>
            <SignUpPage4/>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
