import { Button } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

const LoginStartPage = () => {
  return (
    <>
    
        <div className='flex-column'>
          <div className='mb-3'>
            <Button className='rounded-md bg-blue-200 hover:bg-blue-400 text-black w-full'>
            <Link href="/">Login</Link>
            </Button>
          </div>
          <div className='mb-3'>
            <Button className='rounded-md bg-transparent hover:bg-transparent text-blue-200 hover:text-blue-400 border-4 border-blue-200 hover:border-blue-400 w-full'>
            <Link href="/">Sign Up</Link>
            </Button>
          </div>

          {/* <div>
            <Button className='text-blue-200 hover:text-blue-400 p-0 bg-transparent hover:bg-transparent'>
              <h1>Forgot Password?</h1>
                </Button>
          </div> */}
        </div>
    </>
  )
}

export default LoginStartPage
