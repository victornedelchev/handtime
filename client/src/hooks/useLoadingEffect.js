import { useEffect, useState } from "react";

const useLoadingEffect = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return [isLoading, setIsLoading];
};

export default useLoadingEffect;
