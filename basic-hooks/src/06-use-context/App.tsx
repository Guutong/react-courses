import { createContext, useContext, useState } from 'react';
import { TodoList } from './TodoList';

interface AppContextType {
  theme?: string;
  setTheme?: (theme: string) => void;
}

const AppContext = createContext<AppContextType>({});
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  let [state, setState] = useState({});
  return (
    <AppContext.Provider
      value={{
        ...state,
        setTheme: (theme: string) => setState({ ...state, theme }),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const ThemeToggle = () => {
  let { theme, setTheme } = useAppContext();

  return (
    <button
      onClick={() => setTheme && setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Toggle the theme!
    </button>
  );
};

function App() {
  return (
    <AppProvider>
      <TodoList />
    </AppProvider>
  );
}

export default App;
