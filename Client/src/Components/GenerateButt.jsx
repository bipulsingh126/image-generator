import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'motion/react';
import { AppContext } from '../Context/AppContext.jsx';
import { useNavigate } from 'react-router-dom';

const GenerateButt = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const naviagte = useNavigate();

  const onclickHandler = () => {
    if (user) {
      naviagte('/result');
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=" pb-20 flex flex-col justify-center items-center "
    >
      <h1
        className=" text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-800 py-6 md:py-16 lg:py-20 "
        style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }}
      >
        {' '}
        See The Magic ,Try Now{' '}
      </h1>

      <button onClick={onclickHandler} className=" text-white bg-black w-auto  py-2.5 px-4 flex items-center gap-2 rounded-full shadow-md shadow-black/20 hover:scale-105 hover:shadow-black/30 transition-all duration-300 font-semibold tracking-wide">
        {' '}
        Generate Images <img
          src={assets.star_group}
          className="h-6"
          alt=""
        />{' '}
      </button>
    </motion.div>
  );
};

export default GenerateButt;
