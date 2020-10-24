import React, {memo} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppBar, Button, Hidden, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AnnouncementIcon from '@material-ui/icons/Announcement';
import NavigationDrawer from "../../../shared/components/NavigationDrawer";


const styles = theme => ({
    appBar: {
        boxShadow: theme.shadows[6],
        backgroundColor: theme.palette.common.white
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    menuButtonText: {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
        letterSpacing: 1,
    },
    brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 400
    },
    noDecoration: {
        textDecoration: "none !important"
    }
});

const NavBar = ({
                    classes,
                    openRegisterDialog,
                    openLoginDialog,
                    handleMobileDrawerOpen,
                    handleMobileDrawerClose,
                    mobileDrawerOpen,
                    selectedTab
                }) => {

    const menuItems = [
        {
            link: "/",
            name: "Главная",
            icon: <HomeIcon className="text-white"/>
        },
        {
            link: "/news",
            name: "Новости",
            icon: <AnnouncementIcon className="text-white"/>
        },
        // {
        //     name: "Регистрация",
        //     onClick: openRegisterDialog,
        //     icon: <HowToRegIcon className="text-white"/>
        // },
        {
            name: "Войти",
            onClick: openLoginDialog,
            icon: <LockOpenIcon className="text-white"/>
        }
    ];

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Link
                        to="/"
                        className={classes.noDecoration}
                    >
                        <div>
                            <Typography
                                variant="h4"
                                className={classes.brandText}
                                display="inline"
                                color="primary"
                            >
                                n
                            </Typography>
                            <Typography
                                variant="h4"
                                className={classes.brandText}
                                display="inline"
                                color="secondary"
                            >
                                Edu
                            </Typography>
                        </div>
                    </Link>
                    <div>
                        <Hidden mdUp>
                            <IconButton
                                onClick={handleMobileDrawerOpen}
                                aria-label="Open Navigation"
                            >
                                <MenuIcon color="primary"/>
                            </IconButton>
                        </Hidden>
                        <Hidden smDown>
                            {menuItems.map(element => {
                                if (element.link) {
                                    return (
                                        <Link
                                            key={element.name}
                                            to={element.link}
                                            className={classes.noDecoration}
                                            onClick={handleMobileDrawerClose}
                                        >
                                            <Button
                                                color="secondary"
                                                size="large"
                                                classes={{text: classes.menuButtonText}}
                                            >
                                                {element.name}
                                            </Button>
                                        </Link>
                                    );
                                }
                                return (
                                    <Button
                                        color="secondary"
                                        size="large"
                                        onClick={element.onClick}
                                        classes={{text: classes.menuButtonText}}
                                        key={element.name}
                                    >
                                        {element.name}
                                    </Button>
                                );
                            })}
                        </Hidden>
                    </div>
                </Toolbar>
            </AppBar>
            <NavigationDrawer
                menuItems={menuItems}
                anchor="right"
                open={mobileDrawerOpen}
                selectedItem={selectedTab}
                onClose={handleMobileDrawerClose}
            />
        </div>
    );
}

NavBar.propTypes = {
    handleMobileDrawerOpen: PropTypes.func,
    handleMobileDrawerClose: PropTypes.func,
    mobileDrawerOpen: PropTypes.bool,
    selectedTab: PropTypes.string,
    openRegisterDialog: PropTypes.func.isRequired,
    openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, {withTheme: true})(memo(NavBar));
