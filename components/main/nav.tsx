import Link from 'next/link'

export default function Navbar({ active }: { active?: 'home' | 'projects' | 'domains' | 'contact' }) {
    return (
        <nav className="row-start-1 flex gap[24px] flex-wrap justify-center md:justify-start text-lg sm:text-base space-x-3">
            <Link
                className={`flex items-center gap-2 hover:underline hover:underline-offset-4 ${
                    active === 'home' ? 'glitch underline underline-offset-2' : ''
                }`}
                href="/"
            >
                home
            </Link>
            <Link
                className={`flex items-center gap-2 hover:underline hover:underline-offset-4 ${
                    active === 'projects' ? 'glitch underline underline-offset-2' : ''
                }`}
                href="/projects"
            >
                projects
            </Link>
            <Link
                className={`flex items-center gap-2 hover:underline hover:underline-offset-4 ${
                    active === 'domains' ? 'glitch underline underline-offset-2' : ''
                }`}
                href="/domains"
            >
                domains
            </Link>
            <Link
                className={`flex items-center gap-2 hover:underline hover:underline-offset-4 ${
                    active === 'contact' ? 'glitch underline underline-offset-2' : ''
                }`}
                href="/contact"
            >
                contact
            </Link>
        </nav>
    )
}