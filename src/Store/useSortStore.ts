import create from "zustand";
import { sortingOptions } from "../types/SortingOptions";

interface sortStore {
    sortingCriteria: sortingOptions;
    setSortingCriteria: (newSortingCriteria: sortingOptions) => void;
}

const useSortStore = create<sortStore>((set) => ({
    sortingCriteria: "sortByDefault",
    setSortingCriteria: (newSortingCriteria: sortingOptions) =>
        set(() => ({ sortingCriteria: newSortingCriteria })),
}));

export default useSortStore;
