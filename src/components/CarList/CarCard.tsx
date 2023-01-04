import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    Center,
    Flex,
    Modal,
} from "@mantine/core";
import {
    IconCurrencyDollar,
    Icon123,
    IconTag,
    IconGasStation,
} from "@tabler/icons";
import { useState } from "react";
import useSelectedCarStore from "../../Store/Car/useSelectedCarStore";

import cardStyles from "../../styles/cardstyles";
import { Car } from "../../types/Car";
import CarModal from "../CarModal";

interface CarCardProps {
    car: Car;
}

function CarCard({
    car,
    car: {
        amountOfAvaliable,
        basePrice,
        avgFuelConsumption,
        image,
        model,
        priceCathegory,
    },
}: CarCardProps) {
    const { classes } = cardStyles();
    const [opened, setOpened] = useState(false);
    const { setSelectedCar } = useSelectedCarStore((state) => ({
        setSelectedCar: state.setSelectedCar,
    }));

    const basicInformationData = [
        { label: basePrice, icon: IconCurrencyDollar },
        { label: amountOfAvaliable, icon: Icon123 },
        { label: avgFuelConsumption, icon: IconGasStation },
        { label: priceCathegory, icon: IconTag },
    ];

    const handleCarSelection = () => {
        setOpened(true);
        setSelectedCar(car);
    };

    const features = basicInformationData.map((feature) => (
        <Center key={feature.label}>
            <feature.icon size={18} className={classes.icon} stroke={1.5} />
            <Text size="xs">{feature.label}</Text>
        </Center>
    ));

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title={`Rent ${model}`}
                overlayBlur={1}
                size={720}
                centered
            >
                <CarModal />
            </Modal>

            <Card withBorder radius="md" className={classes.card}>
                <Card.Section className={classes.imageSection}>
                    <Image src={image} alt={model} />
                </Card.Section>

                <Group position="apart" mt="md">
                    <Center inline w={"100%"}>
                        <Text size="xl" weight={700}>
                            {model}
                        </Text>
                    </Center>
                </Group>

                <Card.Section className={classes.section} mt="md">
                    <Text size="sm" color="dimmed" className={classes.label}>
                        Basic information
                    </Text>

                    <Group spacing={8} mb={-8}>
                        {features}
                    </Group>
                </Card.Section>

                <Card.Section className={classes.section}>
                    <Group spacing={30}>
                        <div>
                            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                                {basePrice}$
                            </Text>
                            <Text
                                size="sm"
                                color="dimmed"
                                weight={500}
                                sx={{ lineHeight: 1 }}
                                mt={3}
                            >
                                per day
                            </Text>
                        </div>

                        <Button
                            radius="xl"
                            style={{ flex: 1 }}
                            onClick={handleCarSelection}
                        >
                            Rent now
                        </Button>
                    </Group>
                </Card.Section>
            </Card>
        </>
    );
}
export default CarCard;
