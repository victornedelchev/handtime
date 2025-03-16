import { useEffect, useState } from "react";

import watchAPI from "../api/watches-api";

function useGetAllWatches() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await watchAPI.getAllWatches();
        setWatches(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return [watches, setWatches];
}

function useGetLatestWatches() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await watchAPI.getLatestWatches();
        setWatches(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return [watches, setWatches];
}

function useOneWatch(watchId) {
  const [watch, setWatch] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const result = await watchAPI.getOneWatch(watchId);
        setWatch(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [watchId]);

  return [watch, setWatch];
}

function useCreateWatch() {
  const watchCreateHandler = (watchData) => {
    return watchAPI.createWatch(watchData);
  };

  return watchCreateHandler;
}

export { useGetAllWatches, useGetLatestWatches, useOneWatch, useCreateWatch };
