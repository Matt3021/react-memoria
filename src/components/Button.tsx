import React from 'react';
import '../App.css';

interface ButtonProps {
  label: string,
  icon?: any,
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export const Button = ({ label, icon, onClick }: ButtonProps) => {
  return (
    <div className='container w-52 h-12 flex bg-[#1550FF] rounded-xl cursor-pointer opacity-100 transition-all ease-in duration-300 hover:opacity-80' onClick={onClick}>
      {icon &&
        <div className='icon-area h-12 flex justify-center items-center border-r-[1px] border-r-[rgba(255, 255, 255, 0.2)] px-4'>
          <img src={icon} className='icon h-5' />
        </div>
      }
      <div className='label h-12 text-white flex justify-center items-center flex-1 px-5'>
        {label}
      </div>
    </div>
  )
}