import Link from "next/link";


const Header = () => {
    return (
        <div className="header">
            <ul>
                <Link href="/"><li><a>Home</a></li></Link>
                <Link href='/doc'><li><a>Doc</a></li></Link>
                <Link href='/login'><li><a>Login</a></li></Link>

            </ul>
        </div>
    )
}

export default Header;
