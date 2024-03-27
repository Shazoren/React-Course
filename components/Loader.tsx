import React, { useState, useEffect } from 'react';

interface LoaderProps {
    children: React.ReactNode;
}

const Loader:React.FC<LoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timer = setTimeout(() => { 
          setIsLoading(false);
        },2000);
      } catch (error) {
        console.error('Une erreur s\'est produite :', error);
        setIsLoading(false);
      }
    };

    fetchData();

  }, []);

  return isLoading ? <img src="https://media.giphy.com/media/b3Gp6a25caNZC/giphy.gif" alt="Loading..." /> : <>{children}</>;
};

export default Loader;