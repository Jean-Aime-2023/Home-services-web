"use client"

import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'


const Header = () => {
    const { data } = useSession();

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <div className='p-5 shadow-sm flex justify-between'>
            <div className='flex items-center gap-8'>
                <Link href={'/'}><Image src="/logo.svg" alt="logo" width={70} height={70} /></Link>
                <div className='md:flex items-center gap-6 hidden'>
                    <h2 className=' hover:scale-105 hover:text-primary cursor-pointer'>Home</h2>
                    <h2 className=' hover:scale-105 hover:text-primary cursor-pointer'>Services</h2>
                    <h2 className=' hover:scale-105 hover:text-primary cursor-pointer'>About Us</h2>
                </div>
            </div>
            <div>
                {data?.user ?
                    <DropdownMenu>
                        <DropdownMenuTrigger> <Image src={data.user?.image} alt='user' width={35} height={35} className='rounded-full' /> </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel className="cursor-pointer">My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer">My Booking</DropdownMenuItem>
                            <DropdownMenuItem onClick={()=>signOut()} className="cursor-pointer">Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    :
                    <Button onClick={() => signIn('descope')}>Login / Sign Up</Button>
                }

            </div>
        </div>
    )
}

export default Header