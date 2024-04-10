import { Children } from 'react'
import {Link} from 'react-router-dom'

function HeaderItem(link, text, image){
    return(
    <li className='inline-block'>
        <Link className='px-8 py-4 text-slate-200 hover:bg-slate-800 rounded transition-colors duration-300 flex justify-between' to={link}>
            <img src={image} className='px-2 invert'/>{text}
        </Link>
    </li>
    )
}

const Header = () => {
    navigation=[['/','Home', '/home.svg'],
                ['/login','Login', '/log-in.svg'],
                ['/Register','Register','/user.svg']]


    return(
        <header className="flex flex-row content-center justify-between p-4 text-4xl font-bold bg-slate-900 m-auto fixed w-full h-24">
            <h1 className="text-slate-200 self-center text-center select-none mx-8">AppFinanzas</h1>
            <nav className='mt-auto mb-0'>
                <ul className='no-underline list-none text-2xl'>
                {navigation.map((item)=>(HeaderItem(item[0],item[1], item[2])))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;