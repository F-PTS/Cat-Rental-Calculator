import { Flex } from "@mantine/core";

function ListToolBar() {
    return (
        <Flex
            m={25}
            mih={50}
            gap="lg"
            justify="flex-end"
            align="center"
            direction="row"
            wrap="wrap"
        ></Flex>
    );
}

export default ListToolBar;
