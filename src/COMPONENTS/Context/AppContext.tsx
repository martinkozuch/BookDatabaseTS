import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { API_URL } from "../../API";

interface Book {                       
  id: number;
  title: string;
  authors: string; 
  image_url: string; 
}

interface AppContextType {                        
  favourites: Book[];
  addToFavourites: (book: Book) => void;
  removeFromFavourites: (id: number) => void;
  deleteOne: (mainId: number) => void;
  books: Book[];
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  favouritesChecker: (id: number) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return context;
};

interface AppContextProviderProps {              
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({children }) => {
  const [favourites, setFavourites] = useState<Book[]>([]);
  const [books, setBooks] = useState<Book[]>([]);

  const addToFavourites = (book: Book) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.concat(book);
    setFavourites(newFavourites);
  };

  const removeFromFavourites = (id: number) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.filter((book) => book.id !== id);
    setFavourites(newFavourites);
  };

  const deleteOne = (mainId: number) => {
    const filterOne = books.filter((one) => {
      return one.id !== mainId;
    });
    setBooks(filterOne);
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const favouritesChecker = (id: number) => {
    return favourites.some((book) => book.id === id);
  };

  return (
    <AppContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        deleteOne,
        books,
        setBooks,
        favouritesChecker,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
