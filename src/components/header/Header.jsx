 import React,{useRef,useEffect} from 'react'
 import "./Header.css"


 const nav_links = [
    {
        path:"#home",
        display:"Home"
    },

    {
        path:"#services",
        display:"Services"
    }
 ]

 
 const Header = () => {

    const headerRef = useRef(null)

    const menuRef = useRef(null)
    const headerFunc = () =>{
     if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
         headerRef.current.classList.add('header_shrink')
     }else{
         headerRef.current.classList.remove('header_shrink')
     }
    }
 
    useEffect(() =>{
     window.addEventListener('scroll' , headerFunc)
 
     return () => window.removeEventListener('scroll',headerFunc)
    },[])


    const handleClick = (e) =>{
        e.preventDefault();

        const targetAttr = e.target.getAttribute("href")
        const targetElement = document.querySelector(targetAttr)
        // const location = document.querySelector(targetAttr).offsetTop

        if(targetElement){
            const scrolllocation = targetElement.offsetTop
        
        window.scrollTo({
            left:0,
            top:scrolllocation - 80,
        })
    }
}

    const toggleMenu = () => menuRef.current.classList.toggle('menu_active')
    return (
     <header className='header' ref={headerRef} onClick={toggleMenu}>
        <div className='container'>
            <div className='nav_wrapper'>
                <div className='logo'>
                    <h2 data-text='exmedia'>exmedia</h2>
                    {/* <p>Crafting digital dreams into reality. </p> */}
                </div>

                {/* navigation */}

                <div className='navigation' ref={menuRef}>
                    <ul className='menu'>
                        {nav_links.map((item,index) => (
                            <li className='menu_item'>
                                <a href={item.path} onClick={handleClick} className='menu_link'>
                                    {item.display}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <span className='mobile_menu' onClick={toggleMenu}> 
                    <i class="ri-menu-2-line"></i>
                </span>
            </div>
        </div>
     </header>
     
   )
 }
 
 export default Header