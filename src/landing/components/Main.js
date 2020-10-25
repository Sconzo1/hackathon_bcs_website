import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import {withStyles} from "@material-ui/core";
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import CookieRulesDialog from "./cookies/CookieRulesDialog";
import CookieConsent from "./cookies/CookieConsent";
import DialogSelector from "./dialogs/DialogSelector";
import Routing from "./Routing";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import urlRusLat from "../../shared/functions/urlRusLat";
import axios from "axios";


AOS.init({once: true});

const styles = (theme) => ({
    wrapper: {
        backgroundColor: theme.palette.common.white,
        overflowX: "hidden",
    },
});

const Main = ({classes}) => {
    const [selectedTab, setSelectedTab] = useState(null);
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
    const [newsPosts, setNewsPosts] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(null);
    const [isCookieRulesDialogOpen, setIsCookieRulesDialogOpen] = useState(false);

    const selectHome = useCallback(() => {
        smoothScrollTop();
        document.title =
            "FFF for BCS hackathon";
        setSelectedTab("Home");
    }, [setSelectedTab]);

    const selectNews = useCallback(() => {
        smoothScrollTop();
        document.title = "Блог - nEdu";
        setSelectedTab("News");
    }, [setSelectedTab]);

    const openLoginDialog = useCallback(() => {
        setDialogOpen("login");
        setIsMobileDrawerOpen(false);
    }, [setDialogOpen, setIsMobileDrawerOpen]);

    const closeDialog = useCallback(() => {
        setDialogOpen(null);
    }, [setDialogOpen]);

    const openRegisterDialog = useCallback(() => {
        setDialogOpen("register");
        setIsMobileDrawerOpen(false);
    }, [setDialogOpen, setIsMobileDrawerOpen]);

    const openTermsDialog = useCallback(() => {
        setDialogOpen("termsOfService");
    }, [setDialogOpen]);

    const handleMobileDrawerOpen = useCallback(() => {
        setIsMobileDrawerOpen(true);
    }, [setIsMobileDrawerOpen]);

    const handleMobileDrawerClose = useCallback(() => {
        setIsMobileDrawerOpen(false);
    }, [setIsMobileDrawerOpen]);

    const openChangePasswordDialog = useCallback(() => {
        setDialogOpen("changePassword");
    }, [setDialogOpen]);

    const handleCookieRulesDialogOpen = useCallback(() => {
        setIsCookieRulesDialogOpen(true);
    }, [setIsCookieRulesDialogOpen]);

    const handleCookieRulesDialogClose = useCallback(() => {
        setIsCookieRulesDialogOpen(false);
    }, [setIsCookieRulesDialogOpen]);

    function getNews() {
        axios.post('http://project/bin/index.php', {operation: "getNews"})
            .then(response => {
                if (response.data.result === "success") {
                    if (response.data.news.length !== 0) {
                        const temp = response.data.news.map((element, i) => ({
                            title: element.title,
                            id: element.id_news,
                            date: element.date,
                            importImage: element.image,
                            snippet: element.content.split(' ').slice(0, 6).join(" ") + "...",
                            content: element.content,
                            url: `/news/post/${urlRusLat(element.title)}`,
                            params: `?id=${element.id_news}`
                        }));

                        setNewsPosts(temp);
                    }
                } else {
                    alert("ERROR");
                    console.log("Ошибка");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(getNews, []);

    const refFooter = useRef();

    return (
        <div className={classes.wrapper}>
            {!isCookieRulesDialogOpen && (
                <CookieConsent
                    handleCookieRulesDialogOpen={handleCookieRulesDialogOpen}
                />
            )}
            <DialogSelector
                openLoginDialog={openLoginDialog}
                dialogOpen={dialogOpen}
                onClose={closeDialog}
                openTermsDialog={openTermsDialog}
                openRegisterDialog={openRegisterDialog}
                openChangePasswordDialog={openChangePasswordDialog}
            />
            <CookieRulesDialog
                open={isCookieRulesDialogOpen}
                onClose={handleCookieRulesDialogClose}
            />
            <NavBar
                selectedTab={selectedTab}
                openLoginDialog={openLoginDialog}
                openRegisterDialog={openRegisterDialog}
                mobileDrawerOpen={isMobileDrawerOpen}
                handleMobileDrawerOpen={handleMobileDrawerOpen}
                handleMobileDrawerClose={handleMobileDrawerClose}
            />
            <Routing
                newsPosts={newsPosts}
                selectHome={selectHome}
                refFooter={refFooter}
                selectNews={selectNews}
            />
            <Footer refFooter={refFooter}/>
        </div>
    );
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(memo(Main));
