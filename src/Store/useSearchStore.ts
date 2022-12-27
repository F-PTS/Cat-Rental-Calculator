import create from "zustand";

interface searchStore {
    searchingParams: string;
    setSearchingParams: (newSearchingParams: string) => void;
}

const useSearchStore = create<searchStore>((set) => ({
    searchingParams: "",
    setSearchingParams: (newSearchingParams: string) =>
        set(() => ({ searchingParams: newSearchingParams })),
}));

export default useSearchStore;
