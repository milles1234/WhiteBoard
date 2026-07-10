"use client"
import { useOrganization, UserButton } from '@clerk/nextjs'
import React from 'react'
import SearchInput from './SearchInput'
import { InviteButton } from './invite-button'


const Navbar = () => {
    const organisation = useOrganization()
    return (
        <div className='flex items-center gap-x-4 p-5 '>
            <div className='hidden lg:flex lg:flex-1 '>
                <SearchInput />
            </div>
            <div className='block lg:hidden flex-1'>

            </div>
            {organisation && (
                <InviteButton />
            )}

            <UserButton />

        </div>
    )
}

export default Navbar