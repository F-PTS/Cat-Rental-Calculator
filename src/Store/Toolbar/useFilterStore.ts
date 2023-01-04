import create from "zustand";
import { filterOptions } from "../../types/FilterOptions";

interface filterStore {
    filterCriteria: filterOptions;
    setFilterCriteria: (itemsToShow: filterOptions) => void;
}

const useFilterStore = create<filterStore>((set) => ({
    filterCriteria: "priceCathegory",
    setFilterCriteria: (itemsToShow) =>
        set(() => ({ filterCriteria: itemsToShow })),
}));

export default useFilterStore;
