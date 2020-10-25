import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppBar, Button, Hidden, IconButton, Toolbar, Typography, withStyles, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AnnouncementIcon from '@material-ui/icons/Announcement';
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import GradientTypography from "../../../shared/components/GradientTypography";


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
        textDecoration: "none !important",
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
        color: '#6D6D6D',
        letterSpacing: 1,
        padding: '8px'
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
            icon: <EuroSymbolIcon className="text-white" />
        },
        {
            link: "/",
            name: "Инвестиции",
            icon: <BusinessCenterIcon className="text-white" />
        },
        {
            link: "/",
            name: "Сервисы",
            icon: <AssignmentIndIcon className="text-white" />
        },
        {
            link: "/",
            name: "Обучение",
            icon: <HowToRegIcon className="text-white" />
        },
        {
            link: "/",
            name: "Калькулятор доходности",
            icon: <AccountBalanceIcon className="text-white" />
        },
        // {
        // name: "Регистрация",
        // onClick: openRegisterDialog,
        // icon: <HowToRegIcon className="text-white"/>
        // },
        {
            name: "Открыть счет",
            icon: <LockOpenIcon className="text-white" />
        }
    ];

    return (
        <div className={classes.root}>
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Link
                        to="/"
                        className={classes.noDecoration}
                    >
                        <div>
                            <GradientTypography
                                variant="h3"
                                display='inline'
                            >
                                БКС
                            </GradientTypography>
                        </div>
                    </Link>
                    <div>
                        <Hidden mdUp>
                            <IconButton
                                onClick={handleMobileDrawerOpen}
                                aria-label="Open Navigation"
                            >
                                <MenuIcon color="primary" />
                            </IconButton>
                        </Hidden>
                        <Hidden smDown>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                {menuItems.map(element => {
                                    if (element.link) {
                                        return (
                                            <Grid item>
                                                <Link
                                                    key={element.name}
                                                    to={element.link}
                                                    className={classes.noDecoration}
                                                    onClick={handleMobileDrawerClose}
                                                >
                                                    {element.name}
                                                </Link>
                                            </Grid>
                                        );
                                    }
                                    return (
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            size="large"
                                            onClick={element.onClick}
                                            classes={{ text: classes.menuButtonText }}
                                            key={element.name}
                                        >
                                            {element.name}
                                        </Button>
                                    );
                                })}
                            </Grid>
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

export default withStyles(styles, { withTheme: true })(memo(NavBar));
