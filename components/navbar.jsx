// built in link from next.js
import Link from 'next/link'

export default function Navbar() {
    return(
        <nav>
            <div className="nav">
                <Link href='/' >
                    Home
                </Link>{'   '}
            </div>
            <div className="nav">
                <Link href='/about'>
                    About
                </Link>{'   '}
            </div>
            <div className="nav">
                <Link href='/skills'>
                    skills
                </Link>{'   '}
            </div>
            <div className="nav">
                <Link href='/work'>
                    work
                </Link>
            </div>
        </nav>
    )
}