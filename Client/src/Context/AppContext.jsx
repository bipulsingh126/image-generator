import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [credits, setCredits] = useState(false);

  const backendURI = import.meta.env.VITE_BACKEND_URI;
  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendURI + '/api/user/credits', {
        headers: { token },
      });
      if (data.success) {
        setCredits(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendURI + '/api/image/generate',
        {
          prompt,
        },
        { headers: { token } },
      );
      if (data.success) {
        loadCreditsData();
        return data.imageUrl;
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditsBalance === 0) {
          navigate('/buy-credit');
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
    setShowLogin(true);
  };

  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendURI,
    token,
    setToken,
    credits,
    setCredits,
    loadCreditsData,
    logout,
    generateImage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
