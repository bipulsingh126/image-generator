import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../Context/AppContext';
import { motion } from 'motion/react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Loing = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendURI, setToken, setUser,  } =
    useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmithandler = async (e) => {
    e.preventDefault();
    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendURI + '/api/user/login', {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendURI + '/api/user/register', {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-10 backdrop-blur-sm bg-black/50 flex justify-center items-center ">
      <motion.form
        onSubmit={onSubmithandler}
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" relative bg-white p-10 rounded-xl text-slate-500 "
      >
        <h1 className=" text-center text-2xl text-neutral-700 font-medium ">
          {state}{' '}
        </h1>
        <p className=" text-center text-sm">
          Welcome back! please sign in to continue{' '}
        </p>
        {state !== 'Login' && (
          <div className=" border px-6 py-2 flex items-center gap-2 rounded-full mt-5 ">
            <img width={30} src={assets.profile_icon} alt="" />
            <input
              className=" outline-none text-sm "
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className=" border px-6 py-2 flex items-center gap-2 rounded-full mt-5 ">
          <img width={30} src={assets.email_icon} alt="" />
          <input
            className=" outline-none text-sm "
            type="Email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" border px-6 py-2 flex items-center gap-2 rounded-full mt-5 ">
          <img width={20} src={assets.lock_icon} alt="" />
          <input
            className=" outline-none text-sm "
            type="Password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className=" text-sm text-blue-600 my-4 cursor-pointer ">
          Forgot Password{' '}
        </p>
        <button className=" bg-blue-600 w-full text-sm text-white py-2.5 px-4 rounded-full hover:scale-105 transition-all duration-300 ">
          {state === 'Login' ? 'login' : 'create Account'}{' '}
        </button>
        {state === 'Login' ? (
          <p className=" mt-5 text-center ">
            Dot't have an account?{' '}
            <span
              className=" text-blue-600 cursor-pointer "
              onClick={() => setState('Sign up')}
            >
              Sign up{' '}
            </span>{' '}
          </p>
        ) : (
          <p className=" mt-5 text-center ">
            Already have an account?{' '}
            <span
              className=" text-blue-600 cursor-pointer "
              onClick={() => setState('Login')}
            >
              Login{' '}
            </span>{' '}
          </p>
        )}
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
          className=" absolute top-5 right-5 cursor-pointer "
        />
      </motion.form>
    </div>
  );
};

export default Loing;
