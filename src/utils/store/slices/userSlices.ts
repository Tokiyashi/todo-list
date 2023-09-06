import {createSlice} from '@reduxjs/toolkit'
import {User} from '@/common/types/User';

type UserState =
  {
    user: User | null
  }

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    logOut: (state) => {
      state.user = null
    },
  },
})

export const {setUser, logOut} = userSlice.actions
export default userSlice.reducer