import { useState } from "react";
import { UnstyledButton, Menu, Group } from "@mantine/core";
import {
    IconArrowDown,
    IconArrowsSort,
    IconArrowUp,
    IconChevronDown,
    IconCurrencyDollar,
    IconGasStation,
} from "@tabler/icons";
import usePriceCathegoryPickerStyles from "../../../../styles/priceCathegoryPicker";
import useSortStore from "../../../../Store/Toolbar/useSortStore";
import camelCase from "camelcase";
import { sortingOptions } from "../../../../types/SortingOptions";

const data = [
    { label: "Sort by default", icon: <IconArrowsSort size={16} /> },
    {
        label: "Lowest price",
        icon: (
            <>
                <IconCurrencyDollar size={16} />
                <IconArrowDown size={16} />
            </>
        ),
    },
    {
        label: "Highest price",
        icon: (
            <>
                <IconCurrencyDollar size={16} />
                <IconArrowUp size={16} />
            </>
        ),
    },
    {
        label: "Lowest fuel consumption",
        icon: (
            <>
                <IconGasStation size={16} />
                <IconArrowDown size={16} />
            </>
        ),
    },
    {
        label: "Highest fuel consumption",
        icon: (
            <>
                <IconGasStation size={16} />
                <IconArrowUp size={16} />
            </>
        ),
    },
];

export function SortByPicker() {
    const [opened, setOpened] = useState(false);
    const { classes } = usePriceCathegoryPickerStyles({ opened });
    const [selected, setSelected] = useState(data[0]);
    const { setSortingCriteria } = useSortStore((state) => ({
        setSortingCriteria: state.setSortingCriteria,
    }));

    const items = data.map((item) => (
        <Menu.Item
            icon={item.icon}
            onClick={() => {
                setSortingCriteria(camelCase(item.label) as sortingOptions);
                setSelected(item);
            }}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));

    return (
        <Menu
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
            radius="md"
            width="target"
        >
            <Menu.Target>
                <UnstyledButton className={classes.control} sx={{ width: 300 }}>
                    <Group spacing="xs">
                        {selected.icon}
                        <span className={classes.label}>{selected.label}</span>
                    </Group>
                    <IconChevronDown
                        size={16}
                        className={classes.icon}
                        stroke={1.5}
                    />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
    );
}

export default SortByPicker;
