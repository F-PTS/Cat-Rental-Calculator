import { Flex, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import useSearchStore from "../../../Store/Toolbar/useSearchStore";
import PriceCathegoryPicker from "./Pickers/FilterPicker";
import SortByPicker from "./Pickers/SortByPicker";

function ListToolBar() {
    const { searchingParams, setSearchingParams } = useSearchStore((state) => ({
        setSearchingParams: state.setSearchingParams,
        searchingParams: state.searchingParams,
    }));

    return (
        <Flex
            m={25}
            mih={50}
            gap="lg"
            justify="space-between"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <TextInput
                placeholder="Search by the car model"
                icon={<IconSearch size={14} />}
                sx={{ width: 400 }}
                value={searchingParams}
                onChange={(e) => setSearchingParams(e.target.value)}
            />

            <Flex gap={"md"}>
                <SortByPicker />
                <PriceCathegoryPicker />
            </Flex>
        </Flex>
    );
}

export default ListToolBar;
