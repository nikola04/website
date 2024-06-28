'use client'
import { ReactTyped } from "react-typed";

export default function Loading(){
    return <div className="w-full py-14 flex flex-wrap">
        <div className="w-full py-6 flex justify-between">
            <ReactTyped strings={["Loading..."]} typeSpeed={15} />
        </div>
    </div>
}