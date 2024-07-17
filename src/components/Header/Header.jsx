import logoIMG from '../../assets/images/logo.png'
import './styles.css'


export const Header = () => {
   return (
      <header>
         <nav id='navbar'>
            <div className="nav-brand">
               <img src={logoIMG} alt="Logo da página" />
               <h1>Space Flight News</h1>
            </div>

            <ul className="nav-list">
               <li><a href="# " target='_self'>Home</a></li>
               <li><a href="# " target='_self'>Trending</a></li>
               <li><a href="# " target='_self'>Categories</a></li>
               <li><a href="# " target='_self'>About us</a></li>
            </ul>
         </nav>
      </header>
   )
}
