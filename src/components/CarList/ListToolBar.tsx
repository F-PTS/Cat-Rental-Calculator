import { Flex } from "@mantine/core";
import React from "react";

import { useState } from "react";
import { Pagination } from "@mantine/core";
import usePageStore from "../store/pageStore";

function ListToolBar() {
    const { currentPage, goToPage } = usePageStore((state) => ({
        currentPage: state.currentPage,
        goToPage: state.goToPage,
    }));

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
