'use client'
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Icons = {
    Coffe: <><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></>,
    User: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></>,
    Book: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></>,
    Bookmark: <><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></>
}
const navLinks = [
    { name: "Home", href: "/", Icon: Icons.Coffe },
    { name: "About", href: "/about", Icon: Icons.User },
    { name: "Blog", href: "/blog", Icon: Icons.Book },
    { name: "Projects", href: "/projects", Icon: Icons.Bookmark },
]

const isPathMatching = (path: string, comparePath: string): boolean => {
    if(comparePath == '/' && path != '/') return false
    if(!path.startsWith(comparePath)) return false
    return true
}

export default function Nav(){
    const pathName = usePathname()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    function changeTheme(){
        if(theme == "light")
            setTheme("dark")
        else
            setTheme("light");
    }
    useEffect(() => {
      setMounted(true)
    }, [])

    return(
        <div className="w-full h-14 flex justify-center">
            <div className="h-full w-full max-w-screen-lg inset-0 flex justify-between">
                <div className="flex items-center">
                    { mounted && navLinks.map((link, i) => {
                        return <MenuButton key={i} name={link.name} url={link.href} isActive={isPathMatching(pathName, link.href)} Icon={link.Icon}/>
                    })}
                </div>
                <div className="flex items-center">
                    <a title="Instagram @nikolaa_nedeljkovic" href="https://www.instagram.com/nikolaa_nedeljkovic" target="_blank" className="p-2 m-1 cursor-pointer flex items-center text-gray dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    {/* <a title="Leetcode" href="https://leetcode.com/problem-list/psou9vat/" target="_blank" className="p-2 m-1 cursor-pointer flex items-center text-gray dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" fill="none" stroke="currentColor"><path d="M 10.447266 0.265625 A 0.50005 0.50005 0 0 0 10.103516 0.41796875 L 5.65625 4.8671875 L 3.0957031 7.4257812 A 0.50005 0.50005 0 0 0 2.9785156 7.6035156 C 1.769869 8.9739016 1.7865696 11.063913 3.0957031 12.373047 L 5.65625 14.933594 C 7.0176322 16.294976 9.242133 16.294976 10.603516 14.933594 L 12.853516 12.683594 A 0.50063809 0.50063809 0 1 0 12.144531 11.976562 L 9.8945312 14.226562 C 8.9159134 15.20518 7.3418991 15.20518 6.3632812 14.226562 L 3.8027344 11.666016 C 2.8241166 10.687398 2.8241166 9.1114303 3.8027344 8.1328125 L 6.3632812 5.5742188 C 7.3418991 4.5956009 8.9159135 4.5956009 9.8945312 5.5742188 L 12.144531 7.8242188 A 0.50063784 0.50063784 0 1 0 12.853516 7.1171875 L 10.603516 4.8671875 C 9.9106907 4.174363 8.9943718 3.8431189 8.0820312 3.8554688 L 10.8125 1.125 A 0.50005 0.50005 0 0 0 10.447266 0.265625 z M 7.328125 9.4003906 A 0.50005 0.50005 0 1 0 7.328125 10.400391 L 14.228516 10.400391 A 0.50005 0.50005 0 1 0 14.228516 9.4003906 L 7.328125 9.4003906 z"/></svg>
                    </a> */}
                    <a title="Github @nikola04" href="https://github.com/nikola04" target="_blank" className="p-2 m-1 cursor-pointer flex items-center text-gray dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    { mounted && <button title={ theme == "light" ? "Dark Theme" : "Light Theme"} onClick={changeTheme} className="p-2 m-1 cursor-pointer flex items-center text-accent-dark dark:text-accent">
                        <span>{ theme == 'light' ? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                        }
                        </span>
                    </button> }
                </div>
            </div>
        </div>
    )
}

function MenuButton({ name, url, isActive, Icon }: {
    name: string,
    url: string,
    isActive: boolean,
    Icon: JSX.Element
}){
    return (
        <Link title={name} href={url}>
            <div className={`p-2 m-1 cursor-pointer flex items-center ${ isActive ? "text-accent-dark dark:text-accent" : "text-gray dark:text-white"}`}>
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{Icon}</svg>
                <p>{name}</p>
            </div>
        </Link>
    )
}