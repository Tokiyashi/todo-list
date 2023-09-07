import {useAppSelector} from "@/utils/hooks/store.ts";
import {store} from "@/utils/store";
import {getUserById} from "@/utils/firebase/userStorage.ts";
import {setUser} from "@/utils/store/slices/userSlices.ts";
import {useEffect, useState} from "react";

export const useUser = () => {
  const [loading, setLoading] = useState(true)

  async function initUser() {

    const cachedId = localStorage.getItem('userId')
    if (!cachedId) {
      setLoading(false)
      return
    }

    const fetchedUser = await getUserById(cachedId)
    store.dispatch(setUser(fetchedUser))
    setLoading(false)
  }

  useEffect(() => {
    void initUser()
  }, []);

  const {user} = useAppSelector(state => state.user);

  return {user, loading}
}