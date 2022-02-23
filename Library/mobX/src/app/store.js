import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice' // export default counterSlice.reducer;

// store에 counterSlice 리듀서를 등록
export default configureStore({
  reducer: {
      counter: counterReducer,
  },
})