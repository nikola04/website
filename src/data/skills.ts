export type SkillType = {
    name: string,
    image: string,
    outline: boolean,
    color?: string
}

export const skills: SkillType[] = [
    { name: 'JavaScript', image: '/js.svg', outline: false },
    { name: 'TypeScript', image: '/ts.svg', outline: false },
    { name: 'Node.js', image: '/nodejs.svg', outline: false },
    { name: 'SQL', image: '/mysql.svg', outline: true, color: '#0369a1' },
    { name: 'MongoDB', image: '/mongodb.svg', outline: false },
    { name: 'Next.js', image: '/nextjs.svg', outline: true, color: 'black' },
    { name: 'Tailwind CSS', image: '/tailwind.svg', outline: true, color: '#0891b2' },
    { name: 'C', image: '/clang.svg', outline: true, color: 'blue' },
    { name: 'Java', image: '/javalang.svg', outline: true, color: 'accent' },
]