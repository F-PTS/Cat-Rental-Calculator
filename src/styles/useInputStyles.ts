import { createStyles } from "@mantine/core";

const useInputStyles = createStyles((theme) => ({
    invalid: {
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.fn.rgba(theme.colors.red[8], 0.15)
                : theme.colors.red[0],
    },

    icon: {
        color: theme.colors.red[theme.colorScheme === "dark" ? 7 : 6],
    },
}));

export default useInputStyles;
