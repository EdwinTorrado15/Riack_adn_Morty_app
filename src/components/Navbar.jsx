import React from 'react'
import perfil from '../assets/perfil.webp';

const Navbar = () => {
  return (
    <div className='bg-white text-black w-full flex'>
        <div className='flex items-center p-5 gap-2'>
            <img className='rounded-full w-8 h-8 object-cover' src={perfil} alt="Imagen pagina" />
            <p className='font-bold text-xl'>Rick and Morty app</p>
        </div>
    </div>
  )
}

export default Navbar