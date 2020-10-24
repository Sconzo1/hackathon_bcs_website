import React, {useCallback, useState} from "react";
import PropTypes from "prop-types";
import {Button, Dialog, DialogActions, DialogContent, TextField, Typography, withStyles,} from "@material-ui/core";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";

const styles = (theme) => ({
    dialogContent: {
        paddingTop: theme.spacing(2),
    },
    dialogActions: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
});

const ChangePassword = ({onClose, classes, setLoginStatus}) => {
    const [isLoading, setIsLoading] = useState(false);

    const sendPasswordEmail = useCallback(() => {
        setIsLoading(true);
        setTimeout(() => {
            setLoginStatus("verificationEmailSend");
            setIsLoading(false);
            onClose();
        }, 1500);
    }, [setIsLoading, setLoginStatus, onClose]);

    return (
        <Dialog
            open={true}
            hideBackdrop
            onClose={onClose}
            disableBackdropClick={isLoading}
            disableEscapeKeyDown={isLoading}
            maxWidth="xs"
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    sendPasswordEmail();
                }}
            >
                <DialogContent className={classes.dialogContent}>
                    <Typography paragraph>
                        Введите свою почту снизу, чтобы получить инструкции по сбросу пароля от nEdu.
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        label="Email"
                        autoFocus
                        type="email"
                        autoComplete="off"
                    />
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={onClose} disabled={isLoading}>
                        Отмена
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        disabled={isLoading}
                    >
                        Сбросить пароль
                        {isLoading && <ButtonCircularProgress/>}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

ChangePassword.propTypes = {
    onClose: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    setLoginStatus: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(ChangePassword);
