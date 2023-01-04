import { useState } from "react";
import {
    createStyles,
    UnstyledButton,
    Menu,
    Image,
    Group,
} from "@mantine/core";
import {
    IconChevronDown,
    IconLetterB,
    IconLetterS,
    IconLetterM,
    IconLetterP,
    IconTag,
} from "@tabler/icons";
import usePriceCathegoryPickerStyles from "../../../../styles/priceCathegoryPicker";
import useFilterStore from "../../../../Store/Toolbar/useFilterStore";
import camelCase from "camelcase";
import { filterOptions } from "../../../../types/FilterOptions";

const data = [
    { label: "Price Cathegory", icon: <IconTag size={16} /> },
    { label: "Basic", icon: <IconLetterB size={16} /> },
    { label: "Standard", icon: <IconLetterS size={16} /> },
    { label: "Medium", icon: <IconLetterM size={16} /> },
    { label: "Premium", icon: <IconLetterP size={16} /> },
];

export function FilterPicker() {
    const [opened, setOpened] = useState(false);
    const { classes } = usePriceCathegoryPickerStyles({ opened });
    const [selected, setSelected] = useState(data[0]);
    const { setFilterCriteria } = useFilterStore((state) => ({
        setFilterCriteria: state.setFilterCriteria,
    }));

    const items = data.map((item) => (
        <Menu.Item
            icon={item.icon}
            onClick={() => {
                setFilterCriteria(camelCase(item.label) as filterOptions);
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
                <UnstyledButton className={classes.control}>
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

export default FilterPicker;
