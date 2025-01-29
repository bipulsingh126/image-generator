import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'motion/react';

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const onSubmithandler = async (e) => {
    e.preventDefault();
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmithandler}
      className=" flex flex-col min-h-[90vh] justify-center items-center "
    >
      <div>
        <div className=" relative ">
          <img src={image} className=" max-w-sm rounded " alt="" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              Loading ? 'w-full transition-all duration-[10s] ' : 'w-0'
            } `}
          />
        </div>
        <p className={!Loading ? 'hidden' : ''}>Loading..... </p>
      </div>
      {!isImageLoading && (
        <div className=" flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full ">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Type a phrase, sentence, or paragraph that describes the image you want to create."
            className=" flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color "
          />
          <button
            type="submit"
            className=" bg-zinc-900 px-10 sm:px-16 py-3 rounded-full "
          >
            Gererate{' '}
          </button>
        </div>
      )}

      {isImageLoading && (
        <div className=" flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full ">
          <p
            className=" bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer "
            onClick={() => {
              setIsImageLoading(false);
            }}
          >
            Generate Another{' '}
          </p>
          <a
            download
            className=" bg-zinc-900 px-10 sm:px-16 py-3 rounded-full cursor-pointer "
            href={image}
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
