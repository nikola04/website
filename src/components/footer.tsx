type socialLink = {
    name: string,
    href: string
}
const socialLinks: socialLink[] = [
    { name: "Instagram", href: "https://www.instagram.com/nikolaa_nedeljkovic" },
    { name: "Discord", href: "https://discord.gg/vXZkWCMU6b" },
    { name: "Github", href: "https://github.com/nikola04" },
    { name: "Email", href: "mailto:nikolanedeljkovic.official@gmail.com" }
]

export default function Footer(){
    return(
        <footer className="w-full pb-4 absolute bottom-0 flex flex-col items-center">
            <p className="py-1">
                { socialLinks.map((link: socialLink, i) => <FooterLink key={i} name={link.name} href={link.href} isLast={i == socialLinks.length - 1} />)}
            </p>
            <p className="text-sm text-gray dark:text-white">Copyright &copy; 2024 by Nikola Nedeljković</p>
        </footer>
    )
}

function FooterLink({ name, href, isLast }: {
    name: string,
    href: string,
    isLast: boolean
}){
    const char = !isLast ? '|' : ''
    return <>
        <a className="py-1 px-2" title={name} href={href} target="_blank">{name}</a>
        {char}
    </>
}