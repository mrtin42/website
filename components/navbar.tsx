import Link from 'next/link'

export default function Navbar(props: { active: string }) {
    return (
        <nav className='navbar'>
            <ul>
                <li><Link href="./" className={['page-link', props.active === 'home' ? 'glitch' : ''].join(' ')}>home</Link></li>
                <li><Link href="./projects" className={['page-link', props.active === 'projects' ? 'glitch' : ''].join(' ')}>projects</Link></li>
                <li><Link href="./contact" className={['page-link', props.active === 'contact' ? 'glitch' : ''].join(' ')}>contact</Link></li>
                <li><Link href="./domains" className={['page-link', props.active === 'domains' ? 'glitch' : ''].join(' ')}>domains</Link></li>
            </ul>
        </nav>
    )
}