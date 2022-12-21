import { Tooltip, UnstyledButton } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import { Link } from "react-router-dom";
import navbarStyles from "../../styles/navbarStyles";

interface NavbarLinkProps {
    icon: TablerIcon;
    label: string;
    destination?: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({
    icon: Icon,
    label,
    destination,
    active,
    onClick,
}: NavbarLinkProps) {
    const { classes, cx } = navbarStyles();

    if (destination !== undefined)
        return (
            <Tooltip label={label} position="right" transitionDuration={0}>
                <UnstyledButton
                    component={Link}
                    to={destination}
                    onClick={onClick}
                    className={cx(classes.link, { [classes.active]: active })}
                >
                    <Icon stroke={1.5} />
                </UnstyledButton>
            </Tooltip>
        );

    return (
        <Tooltip label={label} position="right" transitionDuration={0}>
            <UnstyledButton
                onClick={onClick}
                className={cx(classes.link, { [classes.active]: active })}
            >
                <Icon stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}

export default NavbarLink;
