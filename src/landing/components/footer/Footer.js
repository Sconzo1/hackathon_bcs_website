import React from "react";
import PropTypes from "prop-types";
import {Box, Button, Grid, IconButton, withStyles, withWidth} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import {Link} from "react-router-dom";
import GradientTypography from "../../../shared/components/GradientTypography";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
    socialIcon: {
        backgroundColor: "transparent",
        fill: '#b0b0b0',
        "&:hover": {
            backgroundColor: "transparent",
            fill: '#3d84de'
        }
    },
    menuButtonText: {
        letterSpacing: 1,
        fontSize: '16px',
        color: '#b0b0b0',
        "&:hover": {
            backgroundColor: "transparent",
            color: '#3d84de'
        }
    },
    brandText: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700
    },
    noDecoration: {
        textDecoration: "none !important",
    },
});

const infos = [
    {
        icon: <PhoneIcon/>,
        description: "+7 (999) 855 20-40"
    },
    {
        icon: <PhoneIcon/>,
        description: "+7 (888) 653 12-88"
    },
    {
        icon: <MailIcon/>,
        description: "support@gmail.com"
    }
];

const menuItems = [
    {
        link: "/",
        name: "О компании",
        isOpen: true,
        icon: <HomeIcon className="text-white"/>
    },
    {
        link: "/",
        name: "Контакты",
        isOpen: false,
        icon: <HomeIcon className="text-white"/>
    },
    {
        link: "/",
        name: "Cookies",
        isOpen: false,
        icon: <HomeIcon className="text-white"/>
    },
];

const socialIcons = [
    {
        icon: (
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path className="st0"
                      d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"/>
            </svg>
        ),
        label: "VK",
        href: "https://vk.com"
    },
    {
        icon: (
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
        ),
        label: "Facebook",
        href: "https://facebook.com"
    },
    {
        icon: (
            <svg role="img"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
        ),
        label: "Twitter",
        href: "https://www.twitter.com/"
    },
    {
        icon: (
            <svg
                role="img"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Instagram</title>
                <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        ),
        label: "Instagram",
        href: "https://www.instagram.com"
    },
];

const Footer = ({classes, theme, width, refFooter}) => {

    return (
        <footer style={{zIndex: 1}}>
            <Box ml={16} mr={16} mt={6} mb={6}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item md={2}>
                        <GradientTypography variant="h4">
                            LPI
                        </GradientTypography>
                    </Grid>
                    <Grid item md={5}>
                        <Box display="flex">
                            {menuItems.map((element, index) => (
                                    <Box key={element.name} mr={index !== menuItems.length - 1 ? 5 : 0}>
                                        <Link
                                            to={element.link}
                                            className={classes.noDecoration}
                                        >
                                            <Button
                                                disableRipple
                                                color="default"
                                                size="small"
                                                classes={{text: classes.menuButtonText}}
                                            >
                                                {element.name}
                                            </Button>
                                        </Link>
                                    </Box>
                                )
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Divider variant="middle"/>
            <Box ml={16} mr={16} mt={2} mb={2}>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                >
                    <Grid item md={3}>
                        <Box display="flex">
                            {socialIcons.map((socialIcon, index) => (
                                <Box key={index} mr={index !== socialIcons.length - 1 ? 1 : 0}>
                                    <IconButton
                                        aria-label={socialIcon.label}
                                        className={classes.socialIcon}
                                        href={socialIcon.href}
                                        target="_blank"
                                    >
                                        {socialIcon.icon}
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
}

Footer.propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    refFooter: PropTypes.object.isRequired
};

export default withWidth()(withStyles(styles, {withTheme: true})(Footer));
