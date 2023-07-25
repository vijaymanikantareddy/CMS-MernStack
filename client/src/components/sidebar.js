import React from 'react';
import { Sidebardata } from '../data/Sidebardata';
import { NavLink } from 'react-router-dom';

function sidebar() {
    const activeLink = 'hover:bg-indigo-900 pl-7 mt-7 flex justify-start w-full items-center text-white text-2xl font-bold bg-indigo-900'
    const normalLink = 'hover:bg-indigo-900 pl-7 mt-7 flex justify-start w-full items-center text-white text-2xl font-bold'
  return (
    <>
    <React.Fragment>
        <section>
            <div className='text-white'>
                {
                    Sidebardata.map((item, index) =>{
                        return(
                            <div key={index}>
                            <NavLink to={item.path}
                            className={({ isActive }) =>
                            isActive ? activeLink: normalLink}
                          
                             >
                            <span>{item.title}</span>
                            </NavLink>
                            
                        </div>
                        )
                    })
                }
            </div>
        </section>
    </React.Fragment>
    </>
  )
}

export default sidebar