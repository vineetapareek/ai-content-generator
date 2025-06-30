import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-2 shadow-sm border-b-2 flex bg-white justify-between items-center'>
      <div className='flex gap-2 items-center bg-white border p-2 rounded-md max-w-lg'>
        <Search/>
        <input type='text' placeholder='Search...'
        className='outline-none'
        />
      </div>
      {/*<div>
        <h2 className='bg-black p-1 rounded-full text-xs text-white px-2'>Join Membership for $9.99/Month</h2>
      </div>*/}
      <UserButton/>
    </div>
  )
}

export default Header
