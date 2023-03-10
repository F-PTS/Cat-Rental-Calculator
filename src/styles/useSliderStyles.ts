import { createStyles } from "@mantine/core";

const useSliderStyles = createStyles((theme) => ({
    thumb: {
        border: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[3]
        }`,
        width: 28,
        height: 22,
        color: theme.colors.gray[5],
        backgroundColor: theme.white,
        borderRadius: theme.radius.sm,
    },
}));

export default useSliderStyles;
