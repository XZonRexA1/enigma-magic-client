import { useEffect, useState } from "react";

const useClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://enigma-magic-server-xzonrexa1.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);

  return [classes, loading];
};

export default useClasses;
