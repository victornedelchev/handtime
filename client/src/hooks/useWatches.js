import { useEffect, useState } from "react";

import watchAPI from "../api/watches-api";

function useGetAllWatches() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await watchAPI.getAllWatches();
        setWatches(result);
        console.log(watches);
        
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return [watches, setWatches];
}

export { useGetAllWatches };
