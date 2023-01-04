import create from "zustand";
import { Car } from "../../types/Car";

interface selectedCarStore {
    selectedCar: Car | null;
    setSelectedCar: (newCar: Car) => void;
}

const useSelectedCarStore = create<selectedCarStore>((set) => ({
    selectedCar: null,
    setSelectedCar: (newCar) => set(() => ({ selectedCar: newCar })),
}));

export default useSelectedCarStore;
