import React from 'react'
import {ChevronUp, ChevronDown} from 'heroicons-react'
import Link from 'next/link'

function Header() {
  return (
    <div className='bg-third text-grey '>
      <div className='flex   items-center'>
      <div className='flex-1 flex'>
          <div className='flex ml-10'>
          <ChevronUp/>
        <ChevronDown/>
          </div>
          <div>
            <a className='ml-5 lg:ml-64 ' href='#'>All tour</a>
          </div>
        </div>
        <div className='flex '>
          <a className='m-5' href='#'>Shop </a>
          <a className='m-5' href='#'>Login </a>
          <a className='m-5' href='#'>FAQ </a>
          <a className='m-5' href='#'>History </a>
          <a className='m-5' href='#'>Log in </a>
          <Link href="/about">
          <a className='m-5'>About</a>
        </Link>
        </div>

      </div>
        <div className='flex h-2 bg-blue'/>
      </div>
  )
}

export default Header