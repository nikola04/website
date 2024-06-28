export type ProjectType = {
    name: string,
    description: string
    github: string
    type: string
    demo?: string
    download?: string
}

const projects: ProjectType[] = [
    { name: 'GetInsta', description: 'Downloading content from social media(YouTube)', type: 'nodejs', github: 'https://github.com/nikola04/getinsta', demo: 'https://github.com/nikola04/getinsta' },
    { name: 'NxCloud', description: 'Cloud service for managing files(preview, sharing, accounts...)', type: 'nodejs',  github: 'https://github.com/nikola04/nx-drive', demo: '' },
    { name: 'DjPatak', description: 'Streaming music from SoundCloud. Mainly for Discord', type: 'nodejs', github: 'https://github.com/nikola04/discord-music-stream' },
    { name: 'Portfolio', description: 'This portfolio. Made in Next.js and Tailwind', type: 'nextjs', github: '' },
    // { name: '', desciprition: '', github: '' },
]

export { projects }