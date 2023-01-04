import { createStyles } from "@mantine/core";

export const useTableStyles = createStyles((theme) => ({
    header: {
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[1],
    },
    finalRow: {
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.pink[8]
                : theme.colors.pink[1],
        fontWeight: 500,
    },
    row: {
        height: 50,
    },
}));
