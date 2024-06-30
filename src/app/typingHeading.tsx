'use client'
import { ReactTyped } from "react-typed";

export default function TypingHeading({ text }: { text: string }) {
    return <ReactTyped strings={[text]} typeSpeed={60} /> 
}