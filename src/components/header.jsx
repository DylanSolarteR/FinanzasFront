import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <header className="flex flex-row content-center justify-between p-4 text-4xl font-bold bg-black m-auto fixed w-full">
            <h1 className="text-white self-center text-center">AppFinanzas</h1>
            <nav>
                <ul className='no-underline list-none text-white text-2xl'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;