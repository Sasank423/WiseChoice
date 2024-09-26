'use client';
import React, { useRef, useEffect, useContext, useState } from 'react';
import Message from './Message';
import { UtilityCons } from '../providers/utilityprovider';

import { IoMdClose } from 'react-icons/io';
import { AiOutlineSend } from 'react-icons/ai';
import { MdOutlineMarkUnreadChatAlt } from 'react-icons/md';

// const MESSAGES = [
//   {
//     user: 'bot',
//     message: 'welcome to the bot',
//   },
//   {
//     user: 'user',
//     message: 'Hi',
//   },
//   {
//     user: 'bot',
//     message: 'welcome to the bot',
//   },
//   {
//     user: 'user',
//     message: 'Hi',
//   },
//   {
//     user: 'bot',
//     message: 'welcome to the bot',
//   },
//   {
//     user: 'user',
//     message: 'Each child in a list should have a unique "key" prop',
//   },
//   {
//     user: 'bot',
//     message: 'welcome to the bot',
//   },
//   {
//     user: 'user',
//     message: 'Each child in a list should have a unique "key" prop',
//   },
//   {
//     user: 'bot',
//     message: 'welcome to the bot',
//   },
//   {
//     user: 'user',
//     message: 'Each child in a list should have a unique "key" prop',
//   },
//   {
//     user: 'bot',
//     message: 'welcome to the bot',
//   },
//   {
//     user: 'user',
//     message: 'Each child in a list should have a unique "key" prop',
//   },
// ];

const Chatbot = () => {
  const lastMesgRef = useRef();

  // const [chatBot, setChatBot] = useState(true);
  const [product, setProduct] = useState('');
  const [query, setQuery] = useState('');
  const { chatBot, setChatBot } = useContext(UtilityCons);
  const [doStart, setDoStart] = useState(false);
  const [messages, setMessages] = useState([{ user: 'bot', message: 'hi' }]);

  useEffect(() => {
    lastMesgRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatBot]);

  const handleQuery = async () => {
    const qq = query;
    if (doStart) {
      setProduct(query);
    }
    setQuery('');
    const res = await fetch(`http://127.0.0.1:5000/chatbot`, {
      method: 'POST',
      body: JSON.stringify({
        prompt: qq,
        isStart: doStart,
        product: product,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const response = await res.json();
      console.log(response);
      setMessages((prev) => [
        ...prev,
        { user: 'bot', message: response.message },
      ]);
      if (doStart) {
        setDoStart(false);
      }
    }
  };

  return (
    <>
      {chatBot ? (
        <div className="flex flex-col absolute bottom-5 right-5 max-w-[60vh] max-h-[80vh] w-full h-full bg-white rounded-xl shadow-xl">
          <div className="bg-brand flex justify-between items-center text-white rounded-t-xl p-4 font-medium ">
            <h1>ChatBot</h1>
            <button
              className="p-1 hover:bg-gray-300 transition-all hover:text-brand rounded-full"
              onClick={() => setChatBot(false)}
            >
              <IoMdClose size={25} />
            </button>
          </div>

          <div className="h-full overflow-x-hidden overflow-y-scroll py-4 px-3 flex flex-col gap-2">
            {messages.map((item, index) => {
              lastMesgRef;
              return (
                <div
                  className={`w-fit flex ${
                    item.user === 'bot' ? 'self-start' : 'self-end'
                  }`}
                  ref={lastMesgRef}
                  key={index}
                >
                  <Message user={item.user} message={item.message} />
                </div>
              );
            })}
          </div>
          <div className="flex gap-2 p-4 -my-3">
            <button
              onClick={(e) => {
                setMessages((prev) => [
                  ...prev,
                  { user: 'bot', message: 'Provide the Url of the Product' },
                ]);
                setDoStart(true);
              }}
              className="p-1 border-[1px] border-gray-500 text-black rounded-lg"
            >
              Select a Product
            </button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setMessages((prev) => [
                ...prev,
                { type: 'user', message: query },
              ]);
              handleQuery();
            }}
            className="flex p-4 items-center gap-2 -mt-2"
          >
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Enter your Query"
              value={query}
              className="w-full p-2 outline-none rounded-lg border-[1px] border-gray-500 h-full"
            />
            <button
              type="submit"
              className="p-2 bg-brand text-white rounded-lg h-full hover:shadow-lg transition-all"
            >
              <AiOutlineSend size={25} />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setChatBot(true)}
          className="absolute flex gap-2 items-center bottom-5 right-5 rounded-lg text-white bg-brand px-4 py-2 hover:shadow-xl transition-all"
        >
          Chat with Ai
          <MdOutlineMarkUnreadChatAlt size={25} />
        </button>
      )}
    </>
  );
};

export default Chatbot;
