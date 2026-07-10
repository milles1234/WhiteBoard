"use client"

import React from 'react'

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { CreateOrganization } from '@clerk/nextjs'

import { Plus } from 'lucide-react'
import Hint from '../hint'

const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger render={
                <div className='aspect-square'>
                    <Hint label='Create Organization' side='right' sideOffset={18}>
                        <button className='bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition'>
                            <Plus className='text-white' />
                        </button>
                    </Hint>
                </div>
            } />
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <CreateOrganization routing="hash" />
            </DialogContent>
        </Dialog>

    )
}

export default NewButton