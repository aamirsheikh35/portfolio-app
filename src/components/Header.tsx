'use client'
import { useState } from 'react';
import { userInfo, headerItems } from "@/constants/constant";
import { NavItems } from "@/models/Header";
import { BiMenu } from 'react-icons/bi';
import { Link as ScrollLink } from 'react-scroll'


const Header : React.FC = () => {
    const[navItems,showNavItems] = useState<boolean>(false);
    
    return(
        <header className="bg-white p-6 justify-between fixed top-0 w-full z-10 md:flex">
            <div className='flex justify-between'>
                 <h2 className="text-2xl font-bold"> {userInfo.name} </h2>
                 <BiMenu
                 size={30}
                 className="md:hidden"
                 onClick={() => showNavItems(prevState => !prevState)}
                 /> 
            </div>
            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0  md:block ${ navItems ? 'block' : 'hidden'}`}>
                {
                    Object.keys(headerItems).map(items => (
                        <ScrollLink
                        to={headerItems[items as keyof NavItems].page}
                        key={headerItems[items as keyof NavItems].label}
                        className="block md:inline-block cursor-pointer"
                        spy={true}
                        smooth={true}
                        >{headerItems[items as keyof NavItems].label}
                        </ScrollLink>
                    ))
                }

            </div>
        </header>
    )
}

export default Header;