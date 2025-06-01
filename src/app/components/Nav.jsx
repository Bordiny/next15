"use client";
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

export default function Nav() {
    let pathName = usePathname();
    // console.log(pathName)
    return (
        <nav className="bg-gray-800 p-4" style={{ display: pathName === "/login" || pathName === "/register" ? "none" : "block" }}>
            <ul className="flex space-x-4  justify-center p-3 ">
                <li>
                    <Link href="/" className={pathName == '/' ? "text-sky-300 hover:text-sky-600 transition-all duration-300" : "text-white hover:text-gray-300"}>Home</Link>
                </li>
                <li>
                    <Link href="/blog" className={pathName == '/blog' ? "text-sky-300 hover:text-sky-600 transition-all duration-300" : "text-white hover:text-gray-300"}>Blog</Link>
                </li>
                <li>
                    <Link href="/products/1" className={pathName == '/products/1' ? "text-sky-300 hover:text-sky-600 transition-all duration-300" : "text-white hover:text-gray-300"}>Product </Link>
                </li>
                <li>
                    <Link href="/login" className="text-white hover:text-gray-300">Login</Link>
                </li>
                <li>
                    <Link href="/register" className="text-white hover:text-gray-300">Register</Link>
                </li>
                <li>
                    <Link href="/forget" className={pathName == '/forget' ? "text-sky-300 hover:text-sky-600 transition-all duration-300" : "text-white hover:text-gray-300"}>Forget </Link>
                </li>
            </ul>
        </nav>

    )
}
