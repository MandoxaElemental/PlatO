import LoginStartPage from '@/app/Components/LoginComponents/StartPage';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <>
        <div className='grid grid-cols-2'>
          <div className='justify-items-center'>
            <Image src={`/images/Logo.png`} alt="logo" width={500} height={500}/>  
          </div>
          <div>
            <LoginStartPage/>
          </div>
        </div>
    </>
  )
}

export default LoginPage
