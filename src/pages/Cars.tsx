import { Container, Flex } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import CarCard from "../components/CarList/CarCard";
import fetchCarList from "../Query/fetchCarList";
import { Car } from "../types/Car";

function Cars() {
    const { isLoading, isError, data, error } = useQuery<Car[], Error>(
        "carList",
        fetchCarList
    );

    if (isLoading) return <h1>loading...</h1>;
    if (isError) return <h1>Error: {error.message}</h1>;

    return (
        <Container size={1440}>
            <Flex
                mih={50}
                gap="lg"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                {data &&
                    data.map((car) => (
                        <CarCard
                            key={car.id}
                            amountOfAvaliable={car.amountOfAvaliable}
                            basePrice={car.basePrice}
                            avgFuelConsumption={car.avgFuelConsumption}
                            image={car.image}
                            model={car.model}
                            priceCategory={car.priceCathegory}
                        />
                    ))}
            </Flex>
        </Container>
    );
}

export default Cars;
