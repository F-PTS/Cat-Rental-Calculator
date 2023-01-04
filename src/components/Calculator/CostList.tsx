import React, { useEffect, useState } from "react";
import useCalculatorFormValuesStore from "../../Store/Car/useCalculatorFormValuesStore";
import useSelectedCarStore from "../../Store/Car/useSelectedCarStore";
import { differenceInDays, differenceInYears } from "date-fns";
import { priceCathegoryMultipliers } from "../../utils/priceCathegoryMultipliers";
import { Car } from "../../types/Car";
import { Center, Stack, Table } from "@mantine/core";
import { useTableStyles } from "../../styles/tableStyles";

interface CostDataState {
    label?: string;
    value?: number;
}

function CostList() {
    const [totalRentCost, setTotalRentCost] = useState(0);
    const { classes, cx } = useTableStyles();

    const [costData, setCostData] = useState<CostDataState[]>([]);

    const { car } = useSelectedCarStore((state) => ({
        car: state.selectedCar,
    }));

    const { formValues } = useCalculatorFormValuesStore((state) => ({
        formValues: state.formValues,
    }));

    useEffect(() => {
        let tempTotalRentCost = car!.basePrice;

        if (car && formValues) {
            const amountOfRentalDays =
                differenceInDays(
                    formValues.dateRange[1] as Date,
                    formValues.dateRange[0] as Date
                ) + 1;

            const priceCathegory =
                tempTotalRentCost *
                priceCathegoryMultipliers[car.priceCathegory];

            setCostData((current) => [
                ...current,
                {
                    label: "Base price",
                    value: priceCathegory,
                },
            ]);

            tempTotalRentCost = priceCathegory;

            const calculateRentalDaysCost =
                tempTotalRentCost * amountOfRentalDays;
            setCostData((current) => [
                ...current,
                {
                    label: `Rental Days (${amountOfRentalDays})`,
                    value: calculateRentalDaysCost,
                },
            ]);
            tempTotalRentCost += calculateRentalDaysCost;

            if (formValues.driverLicenseYear! - new Date().getFullYear() < 5) {
                const calculateFee = tempTotalRentCost * 0.2;

                setCostData((current) => [
                    ...current,
                    {
                        label: `Driver license less 5 years old`,
                        value: calculateFee,
                    },
                ]);
                tempTotalRentCost *= 1.2;
            }

            if (car.amountOfAvaliable < 3) {
                const calculateFee = tempTotalRentCost * 0.15;

                setCostData((current) => [
                    ...current,
                    {
                        label: `Less than 3 cars of this model being avaliable`,
                        value: calculateFee,
                    },
                ]);
                tempTotalRentCost *= 1.15;
            }

            if (differenceInYears(new Date(), formValues.birthDate!) < 18) {
                setCostData((current) => [
                    ...current,
                    {
                        label: `Under 18 years old fee`,
                        value: 50,
                    },
                ]);
                tempTotalRentCost += 50;
            }

            // divided gas price by 1000 because my API is crap and I wanted to make it more realistic

            const calculateGasPrice =
                formValues.distance * (car.currentLocation[0].gasPrice / 1000);

            setCostData((current) => [
                ...current,
                {
                    label: `Total gas price`,
                    value: +calculateGasPrice.toFixed(2),
                },
            ]);

            tempTotalRentCost += calculateGasPrice;

            setCostData((current) => [
                ...current,
                {
                    label: `Total rental cost`,
                    value: tempTotalRentCost,
                },
            ]);

            setTotalRentCost(tempTotalRentCost);
        }

        return () => {
            setCostData([]);
        };
    }, []);

    const a = costData.map((cost, index) => (
        <p key={index}>{`${cost.label} | ${cost.value} PLN`}</p>
    ));

    const rows = costData.map((cost, index) => (
        <tr
            key={index}
            className={
                cost.label === "Total rental cost"
                    ? classes.finalRow
                    : classes.row
            }
        >
            <td>{cost.label}</td>
            <td>{`${cost.value?.toFixed(2)} PLN`}</td>
        </tr>
    ));

    return (
        <Stack justify="center" align="center">
            <h2>Order details</h2>
            <Table sx={{ maxWidth: 480, marginBottom: 40 }}>
                <thead className={classes.header}>
                    <tr>
                        <th>Cost Information</th>
                        <th>Value in PLN</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </Stack>
    );
}

export default CostList;
