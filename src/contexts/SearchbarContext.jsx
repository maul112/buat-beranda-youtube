import { createContext, useContext, useState } from "react";

const SearchbarContext = createContext(undefined);
export function SearchbarProvider({children}) {
    const [search, setSearch] = useState("");

    return (
        <SearchbarContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchbarContext.Provider>
    )
}

export function useSearchbar() {
    const context = useContext(SearchbarContext);
    if (context === undefined) {
      throw new Error("useSearchbar must be used within a SearchbarProvider");
    }
    return context;
  }
  