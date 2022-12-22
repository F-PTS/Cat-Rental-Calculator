import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    Center,
    Flex,
} from "@mantine/core";
import {
    IconCurrencyDollar,
    Icon123,
    IconTag,
    IconGasStation,
} from "@tabler/icons";

import cardStyles from "../../styles/cardstyles";
import { Car } from "../../types/Car";

interface CarCardProps {
    model: string;
    priceCategory: string;
    basePrice: string;
    amountOfAvaliable: number;
    avgFuelConsumption: number;
    image: string;
}

function CarCard({
    amountOfAvaliable,
    basePrice,
    avgFuelConsumption,
    image,
    model,
    priceCategory,
}: CarCardProps) {
    const { classes } = cardStyles();

    const mockdata = [
        { label: basePrice, icon: IconCurrencyDollar },
        { label: amountOfAvaliable, icon: Icon123 },
        { label: avgFuelConsumption, icon: IconGasStation },
        { label: priceCategory, icon: IconTag },
    ];

    const features = mockdata.map((feature) => (
        <Center key={feature.label}>
            <feature.icon size={18} className={classes.icon} stroke={1.5} />
            <Text size="xs">{feature.label}</Text>
        </Center>
    ));

    return (
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

                    <Button radius="xl" style={{ flex: 1 }}>
                        Rent now
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
}
export default CarCard;
