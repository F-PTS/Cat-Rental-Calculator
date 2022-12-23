import { Center, Container, Flex, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import CarCard from "../components/CarList/CarCard";
import ListToolBar from "../components/CarList/ListToolBar";
import fetchCarList from "../Query/fetchCarList";
import { Car } from "../types/Car";

function Cars() {
    const { isLoading, isError, data, error } = useQuery<Car[], Error>(
        "carList",
        fetchCarList,
        {
            refetchOnWindowFocus: false,
        }
    );

    if (isLoading) return <h1>loading...</h1>;
    if (isError) return <h1>Error: {error.message}</h1>;

    return (
        <Container size={1440}>
            <ListToolBar />
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
            <Container mb={50} mt={50}>
                <Text align="center">
                    I could have made a pagination system for this list and I
                    know I should, but my free mocking API is so primitive it
                    doesn't have any adjustable limit for the JSON in the
                    response, thus I'd have to slice whole JSON apart just in
                    order to "show off"
                    <br />
                    <br />I hope you understand that I didn't want to do that
                    because thats a massive, non-scalable defect.
                    <br />
                    <br />
                    Normally I would never print whole list straight like that
                    and I know its invalid.
                    <br />
                    But again, free API.
                </Text>
            </Container>
        </Container>
    );
}

export default Cars;
