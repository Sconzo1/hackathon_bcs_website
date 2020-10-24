import React, {Fragment, useCallback, useEffect, useState} from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import {Box, Button, Snackbar, Typography,} from "@material-ui/core";


const CookieConsent = ({handleCookieRulesDialogOpen}) => {
    const [isVisible, setIsVisible] = useState(false);

    const onAccept = useCallback(() => {
        Cookies.set("cookie-snackbar", "wasShown", {
            expires: 365,
        });
        setIsVisible(false);
    }, [setIsVisible]);

    useEffect(() => {
        if (Cookies.get("cookie-snackbar") === undefined) {
            setIsVisible(true);
        }
    }, [setIsVisible]);

    return (
        <Snackbar
            open={isVisible}
            message={
                <Typography className="text-white">
                    Мы используем файлы cookie, чтобы обеспечить вам наилучший опыт работы с нашим сайтом.{" "}
                </Typography>
            }
            action={
                <Fragment>
                    <Box mr={1}>
                        <Button color="primary" onClick={handleCookieRulesDialogOpen}>
                            Узнать
                        </Button>
                    </Box>
                    <Button color="primary" onClick={onAccept}>
                        Принимаю
                    </Button>
                </Fragment>
            }
        />
    );
};

CookieConsent.propTypes = {
    handleCookieRulesDialogOpen: PropTypes.func.isRequired,
};

export default CookieConsent
