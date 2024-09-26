import React from 'react';
import Image from 'next/image';
import { FaRegBookmark } from 'react-icons/fa';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { AiOutlineLogin } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full justify-between  bg-white shadow-xl p-4 max-w-[15rem] w-full">
      <h1 className="text-2xl font-bold text-brand self-center">WiseChoice</h1>
      <div className="flex flex-col items-start">
        <div className="flex gap-1 items-center">
          <Image
            src="/user.png"
            alt="user"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h1 className="text-xl font-medium">Kalyan</h1>
        </div>
        <button className="hover:shadow-lg px-4 py-3 w-full transition-all rounded-lg flex gap-2 items-center">
          <FaRegBookmark size={22} />
          <p>WishList</p>
        </button>
        <button className="hover:shadow-lg px-4 py-3 w-full transition-all rounded-lg flex gap-2 items-center">
          <RiLogoutCircleLine size={25} />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
