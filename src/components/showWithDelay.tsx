'use client'

import { useEffect, useState } from "react"

export default function ShowWithDelay({ children, delay }: Readonly<{
    children: React.ReactNode,
    delay: number
}>){
    const [shown, setShown] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => setShown(true), delay)
        return () => timeout && clearTimeout(timeout)
    }, [])
    return <div className={`opacity-0 transition-all ${ shown && 'opacity-100'}`}>{ children }</div>
}