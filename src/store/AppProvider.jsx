import { createContext } from 'react';

export const AppContext = createContext(null);

const AppProvider = (props) => {
  return (
    <AppContext.Provider value={props.value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
