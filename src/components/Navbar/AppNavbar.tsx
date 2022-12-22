import { useState } from "react";
import {
    Navbar,
    Center,
    Stack,
    useMantineColorScheme,
    Anchor,
} from "@mantine/core";
import {
    IconCar,
    IconHome2,
    IconBrandGithub,
    IconMoon,
    IconSun,
    IconApi,
} from "@tabler/icons";

import NavbarLink from "./NavbarLink";

const mockdata = [
    { icon: IconHome2, label: "Home", route: "/" },
    { icon: IconCar, label: "Cars", route: "/cars" },
];

function AppNavbar() {
    const [active, setActive] = useState(0);
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            destination={link.route}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <Navbar height={"100vh"} width={{ base: 80 }} p="md">
            <Center>
                <h4>Pitus</h4>
            </Center>
            <Navbar.Section grow mt={50}>
                <Stack justify="center" spacing={0}>
                    {links}
                    <Anchor
                        href="https://github.com/F-PTS/Cat-Rental-Calculator"
                        target="_blank"
                    >
                        <NavbarLink
                            icon={IconBrandGithub}
                            label="See this code on github"
                        />
                    </Anchor>
                    <Anchor
                        href="https://63a31c75471b38b206063bd1.mockapi.io/cars"
                        target="_blank"
                    >
                        <NavbarLink icon={IconApi} label="Mock REST API" />
                    </Anchor>
                </Stack>
            </Navbar.Section>
            <Navbar.Section>
                <Stack justify="center" spacing={0}>
                    <NavbarLink
                        icon={colorScheme === "light" ? IconMoon : IconSun}
                        label="Change Theme"
                        onClick={() => {
                            toggleColorScheme();
                        }}
                    />
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
}

export default AppNavbar;
