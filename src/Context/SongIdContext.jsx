import { createContext, useState } from "react";

export const SongIdContext =  createContext();

const SongIdContextProvider = ({children}) => {
    const [nowPlayingIndex, setNowPlayingIndex] = useState(0);

    const changeID = (val) => {
        setNowPlayingIndex(val);
    }
    const value = {nowPlayingIndex, changeID};

    return (
        <SongIdContext.Provider value={value}>{children}</SongIdContext.Provider>
    )
}

export default SongIdContextProvider;