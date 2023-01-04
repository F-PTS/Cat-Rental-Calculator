import { useId, useRef, useState } from "react";
import { Stepper, Button, Group, Center, Stack } from "@mantine/core";
import CalculatorForm from "./Calculator/Form/CalculatorForm";
import CostList from "./Calculator/CostList";
import { IconCircleCheck } from "@tabler/icons";

function CarModal() {
    const [active, setActive] = useState(0);
    const [isNextStepDisabled, setIsNextStepDisabled] = useState(true);

    const changeNextStepDisability = (newValue: boolean) => {
        setIsNextStepDisabled(newValue);
    };

    const nextStep = () => {
        setActive((current) => (current < 3 ? current + 1 : current));
    };

    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <>
            <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step
                    label="First step"
                    description="Provide required data"
                    allowStepSelect={active > 0}
                >
                    <CalculatorForm
                        changeNextStepDisability={changeNextStepDisability}
                    />
                </Stepper.Step>

                <Stepper.Step
                    label="Second step"
                    description="Calculate the price"
                    allowStepSelect={active > 1}
                >
                    <CostList />
                </Stepper.Step>

                <Stepper.Step
                    label="Final step"
                    description="Finalize transaction"
                    allowStepSelect={active > 2}
                >
                    <Center>
                        <Button>finalize payment</Button>
                    </Center>
                </Stepper.Step>

                <Stepper.Completed>
                    <Stack justify="center" align="center">
                        <IconCircleCheck />
                        Completed, your payment has been completed successfully.
                    </Stack>
                </Stepper.Completed>
            </Stepper>

            <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                    Back
                </Button>
                <Button
                    type="submit"
                    form="first-step-form"
                    onClick={nextStep}
                    disabled={isNextStepDisabled}
                >
                    Next step
                </Button>
            </Group>
        </>
    );
}

export default CarModal;
