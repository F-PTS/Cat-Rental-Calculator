import React from "react";
import { useQuery } from "react-query";
import fetchCarList from "../Query/fetchCarList";
import { Car } from "../types/Car";
import { ErrorType } from "../types/ErrorType";

function Cars() {
    const { isLoading, isError, data, error } = useQuery<Car[], Error>(
        "carList",
        fetchCarList
    );

    if (isLoading) return <h1>loading</h1>;
    if (isError) return <h1>Error: {error.message}</h1>;
    if (data) return <h1>{data[0].model}</h1>;
}

export default Cars;
