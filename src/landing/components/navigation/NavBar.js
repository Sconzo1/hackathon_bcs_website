import React, {memo} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppBar, Button, Hidden, IconButton, Toolbar, Typography, withStyles} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
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
        letterSpacing: 1,
        fontSize: '16px',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 500
    },
    brandText: {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700
    },
    noDecoration: {
        textDecoration: "none !important",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
    },
    buttonToOpenAccountLabel: {
        letterSpacing: 1,
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 500,
        background: '#5F87E8',
        color: '#fff'
    },
    buttonToOpenAccount: {
        "&:hover": {
            boxShadow: " 0 0 10px rgba(0,0,0,0.5)",
            borderColor: "#FFFFFF",
            color: "#FFFFFF",
            backgroundColor: "rgba(21,21,21,0.4)",
            borderWidth: 2
        },
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
            name: "Торговля",
            icon: <HomeIcon className="text-white"/>
        },
        {
            link: "/",
            name: "Инвестиции",
            icon: <HomeIcon className="text-white"/>
        },
        {
            link: "/",
            name: "Обучение",
            icon: <HomeIcon className="text-white"/>
        },
        {
            link: "/",
            name: "Профессионалам",
            icon: <HomeIcon className="text-white"/>
        },
        {
            link: "/news",
            name: "Банк",
            icon: <AnnouncementIcon className="text-white"/>
        },
// {
// name: "Регистрация",
// onClick: openRegisterDialog,
// icon: <HowToRegIcon className="text-white"/>
// },
        {
            name: "Открыть счет",
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
                                color="secondary"
                            >
                                БКС
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
                                                size="small"
                                                classes={{text: classes.menuButtonText}}
                                            >
                                                {element.name}
                                            </Button>
                                        </Link>
                                    );
                                }
                                return (
                                    <Button
                                        color="primary"
                                        size="large"
                                        onClick={element.onClick}
                                        classes={{
                                            text: classes.buttonToOpenAccountLabel,
                                            root: classes.buttonToOpenAccount
                                        }}
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