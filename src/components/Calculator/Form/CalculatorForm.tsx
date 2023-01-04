import { useEffect, useState } from "react";
import {
    Button,
    Center,
    Checkbox,
    Container,
    Flex,
    NumberInput,
    Slider,
    Space,
    TextInput,
} from "@mantine/core";
import { IconAlertTriangle, IconGripHorizontal } from "@tabler/icons";
import useInputStyles from "../../../styles/useInputStyles";
import useSliderStyles from "../../../styles/useSliderStyles";
import { DatePicker, RangeCalendar } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { subYears, addDays } from "date-fns";
import { CalculatorFormValues } from "../../../types/calculatorFormValues";
import useCalculatorFormValuesStore from "../../../Store/Car/useCalculatorFormValuesStore";
import useSelectedCarStore from "../../../Store/Car/useSelectedCarStore";

interface CalculatorFormProps {
    changeNextStepDisability: (newValue: boolean) => void;
}

function CalculatorForm({ changeNextStepDisability }: CalculatorFormProps) {
    const [sliderValue, setSliderValue] = useState(2);
    const [rangeCalendarValue, setRangeCalendarValue] = useState<
        [Date | null, Date | null]
    >([null, null]);
    const { setCalculatorFormValues } = useCalculatorFormValuesStore(
        (state) => ({
            setCalculatorFormValues: state.setCalculatorFormValues,
        })
    );

    const { car } = useSelectedCarStore((state) => ({
        car: state.selectedCar,
    }));

    const { classes: inputClasses } = useInputStyles();
    const { classes: sliderClasses } = useSliderStyles();

    const initialValues: CalculatorFormValues = {
        firstName: "",
        lastName: "",
        pesel: "",
        birthDate: null,
        dateRange: [null, null],
        distance: 10,
        driverLicenseYear: null,
    };

    const validationSchema = z.object({
        firstName: z.string().min(3, {
            message: "First name should be at least 3 characters",
        }),
        lastName: z.string().min(3, {
            message: "Last name should be at least 3 characters",
        }),
        pesel: z
            .string()
            .length(11, { message: "PESEL should have exactly 11 digits" }),
        birthDate: z
            .date()
            .min(new Date("1900-01-01"), { message: "Too old" })
            .max(subYears(new Date(), 16), { message: "Too young" }),
        driverLicenseYear: z
            .number()
            .min(new Date("1950-01-01").getFullYear(), { message: "Too old" })
            .max(
                car?.priceCathegory === "premium"
                    ? subYears(new Date(), 3).getFullYear()
                    : new Date().getFullYear(),
                {
                    message:
                        "You can't rent this car due to driver license being not old enough",
                }
            ),
        dateRange: z.array(
            z.date().min(new Date()).max(addDays(new Date(), 90)).nullable()
        ),
        distance: z.number(),
    });

    const form = useForm<CalculatorFormValues>({
        validate: zodResolver(validationSchema),
        validateInputOnChange: true,
        initialValues,
    });

    useEffect(() => {
        changeNextStepDisability(true);
    }, []);

    const handleSubmit = (formValues: CalculatorFormValues) => {
        console.log(formValues);
        console.log(form.errors);
        if (form.errors) {
            changeNextStepDisability(false);
            setCalculatorFormValues(formValues);
        }
    };

    return (
        <Container size="xs">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Center>
                    <Flex direction="column" gap={8}>
                        <TextInput
                            label="First Name"
                            placeholder="first name"
                            rightSection={
                                <IconAlertTriangle stroke={1.5} size={16} />
                            }
                            required
                            {...form.getInputProps("firstName")}
                        />

                        <TextInput
                            label="Last name"
                            placeholder="last name"
                            rightSection={
                                <IconAlertTriangle stroke={1.5} size={16} />
                            }
                            required
                            {...form.getInputProps("lastName")}
                        />

                        <DatePicker
                            label="Birth date"
                            placeholder="birth date"
                            rightSection={
                                <IconCalendar stroke={1.5} size={16} />
                            }
                            required
                            {...form.getInputProps("birthDate")}
                        />
                        <TextInput
                            label="PESEL number"
                            placeholder="PESEL number"
                            rightSection={
                                <IconAlertTriangle stroke={1.5} size={16} />
                            }
                            required
                            {...form.getInputProps("pesel")}
                        />

                        <NumberInput
                            label="Driver license year"
                            placeholder="Driver license year"
                            rightSection={
                                <IconAlertTriangle stroke={1.5} size={16} />
                            }
                            required
                            maxLength={4}
                            {...form.getInputProps("driverLicenseYear")}
                        />
                    </Flex>
                    <Space w={40} />
                    <Flex direction="column">
                        <RangeCalendar
                            minDate={new Date()}
                            allowSingleDateInRange
                            value={rangeCalendarValue}
                            onChange={setRangeCalendarValue}
                            {...form.getInputProps("dateRange")}
                        />
                    </Flex>
                </Center>
                <Space h={40} />
                <Flex direction="column" align="center" gap={16}>
                    <Slider
                        w={450}
                        classNames={sliderClasses}
                        thumbChildren={
                            <IconGripHorizontal size={18} stroke={1.5} />
                        }
                        step={1}
                        label={(value) => `${value}00 km`}
                        min={1}
                        max={100}
                        {...form.getInputProps("distance")}
                        value={sliderValue}
                        onChange={setSliderValue}
                    />
                </Flex>
                <Space h={20} />
                <Center>
                    <Button type="submit">Submit</Button>
                </Center>
                <Space h={20} />
            </form>
        </Container>
    );
}

export default CalculatorForm;
