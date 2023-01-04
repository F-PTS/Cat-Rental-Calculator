import arraySort from "array-sort";
import { Car } from "../types/Car";
import { filterOptions } from "../types/FilterOptions";
import { sortingOptions } from "../types/SortingOptions";

const sortAndFilter = (
    sortingCriteria: sortingOptions,
    filterCriteria: filterOptions,
    searchingParams: string,
    carsToSort: Car[]
) => {
    if (filterCriteria !== "priceCathegory") {
        carsToSort = carsToSort.filter(
            (car) => car.priceCathegory === filterCriteria
        );
    }

    if (searchingParams) {
        carsToSort = carsToSort.filter((car) =>
            car.model.toLowerCase().includes(searchingParams.toLowerCase())
        );
    }

    if (sortingCriteria === "lowestPrice")
        return arraySort(carsToSort!, "basePrice");

    if (sortingCriteria === "highestPrice")
        return arraySort(carsToSort!, "basePrice", { reverse: true });

    if (sortingCriteria === "lowestFuelConsumption")
        return arraySort(carsToSort!, "avgFuelConsumption");

    if (sortingCriteria === "highestFuelConsumption")
        return arraySort(carsToSort!, "avgFuelConsumption", {
            reverse: true,
        });

    return arraySort(carsToSort!, "id");
};

export default sortAndFilter;
