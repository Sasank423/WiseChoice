import React from 'react';
import Image from 'next/image';
import { HiMiniUser } from 'react-icons/hi2';
import { RiRobot3Fill } from 'react-icons/ri';

const Message = ({ user, message }) => {
  return (
    <>
      {user === 'bot' ? (
        <div className="flex h-full">
          <div className="flex items-end h-full p-1 rounded-full text-bot">
            <RiRobot3Fill />
          </div>
          <div className="p-2  rounded-xl max-w-[40vh] bg-bot text-white w-fit">
            {message}
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="p-2 rounded-xl max-w-[40vh] bg-user text-white w-fit">
            {message}
          </div>
          <div className="flex items-end p-1 rounded-full text-user">
            <HiMiniUser />
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
