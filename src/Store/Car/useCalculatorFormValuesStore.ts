import create from "zustand";
import { CalculatorFormValues } from "../../types/calculatorFormValues";

interface CalculatorFormValuesStore {
    formValues: CalculatorFormValues | null;
    setCalculatorFormValues: (newValues: CalculatorFormValues) => void;
}

const useCalculatorFormValuesStore = create<CalculatorFormValuesStore>(
    (set) => ({
        formValues: null,
        setCalculatorFormValues: (newValues) =>
            set(() => ({ formValues: newValues })),
    })
);

export default useCalculatorFormValuesStore;
