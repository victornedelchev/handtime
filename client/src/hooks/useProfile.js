import { useEffect, useState } from "react";

import { getUser } from "../api/auth-api";

function useGetProfile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    try {
      (async () => {
        const result = await getUser();
        setProfile(result);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return [profile, setProfile];
}

export { useGetProfile };
