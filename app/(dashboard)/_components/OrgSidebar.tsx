"use client"
import React from 'react'


import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { OrganizationSwitcher } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Star } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

const font = Poppins({
    subsets: ["latin"],
    weight: "600",
})

const OrgSidebar = () => {
    const SearchParams = useSearchParams()
    const favorite = SearchParams.get("favorites")
    return (
        <div className='hidden lg:flex flex-col space-y-6 w-[206px] h-full pl-5 pt-5'>
            <Link href="/">
                <div className='flex items-center gap-x-2'>
                    <Image
                        src="./logo.svg"
                        alt="Logo"
                        height={60}
                        width={60}
                    />
                    <span className={cn("font-semibold text-2xl", font.className,)}>
                        Board

                    </span>

                </div>

            </Link>
            <OrganizationSwitcher />
            <div className='sapce-y-1 w-full'>
                <Button
                    variant={favorite ? "ghost" : "secondary"}
                    className="font-normal justify-start px-2 w-full"
                    render={
                        <Link href="/">
                            <LayoutDashboard className='h-4 w-4 mr-2' />
                            Teams Boards
                        </Link>
                    }
                />
            </div>
            <div className='sapce-y-1 w-full'>
                <Button
                    variant={favorite ? "secondary" : "ghost"}
                    className="font-normal justify-start px-2 w-full"
                    render={
                        <Link href={{
                            pathname: "/",
                            query: { favorites: true }
                        }}>
                            <Star className='h-4 w-4 mr-2' />
                            Favourite Boards
                        </Link>
                    }
                />
            </div>
        </div>
    )
}

export default OrgSidebar