import logoTeletalkB from '../img/Teletalk-B.png'

const MENU_ITEMS =[
  {
    tittle:'Somos',
    url:'#somos',
    cName:'nav-links'
  },  {
    tittle:'Somos',
    url:'#somos',
    cName:'nav-links'
  },  {
    tittle:'Somos',
    url:'#somos',
    cName:'nav-links'
  },  {
    tittle:'Somos',
    url:'#somos',
    cName:'nav-links'
  }
]


const Nav = () => {
  return (
    <nav className="container-navbar h-[5em] flex items-center text-2xl text-white bg-black">
      <img src={logoTeletalkB} className="navbar-logo w-[250px] m-7 cursor-pointer" alt="Teletallk-b" />

      <div className='menu-icon'>
        <i className={``}></i>
      </div>
      <ul className='nav-menu'>
        {MENU_ITEMS.map((item,index)=>{
          return(
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.tittle}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
