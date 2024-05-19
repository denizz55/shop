import Link from 'next/link'
const Header = () => {
    return(
        <header>
            <span>Style</span>
            <nav>
                <li><Link href="/">Главная</Link></li>
                <li><Link href="/product">Товары</Link></li>
            </nav>
        </header>
            )
}

export default Header