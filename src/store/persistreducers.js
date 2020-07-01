import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'], // reducers name that I want storage informations
    },
    reducers
  );

  return persistedReducer;
}; // Function that receive the reducers as a parammeter
