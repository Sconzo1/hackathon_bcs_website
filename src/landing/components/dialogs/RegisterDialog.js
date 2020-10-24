import React, {Fragment, useCallback, useRef, useState} from "react";
import PropTypes from "prop-types";
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormHelperText,
    TextField,
    Typography,
    withStyles,
} from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";

const styles = (theme) => ({
    link: {
        transition: theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.easeInOut,
        }),
        cursor: "pointer",
        color: theme.palette.primary.main,
        "&:enabled:hover": {
            color: theme.palette.primary.dark,
        },
        "&:enabled:focus": {
            color: theme.palette.primary.dark,
        },
    },
});

const RegisterDialog = ({setStatus, onClose, openTermsDialog, status, classes}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasTermsOfServiceError, setHasTermsOfServiceError] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const registerTermsCheckbox = useRef();
    const registerPassword = useRef();
    const registerPasswordRepeat = useRef();

    const register = useCallback(() => {
        if (!registerTermsCheckbox.current.checked) {
            setHasTermsOfServiceError(true);
            return;
        }
        if (registerPassword.current.value.length < 6) {
            setStatus("passwordTooShort");
            return;
        }
        if (
            registerPassword.current.value !== registerPasswordRepeat.current.value
        ) {
            setStatus("passwordsDontMatch");
            return;
        }
        setStatus(null);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, [
        setIsLoading,
        setStatus,
        setHasTermsOfServiceError,
        registerPassword,
        registerPasswordRepeat,
        registerTermsCheckbox,
    ]);

    return (
        <FormDialog
            loading={isLoading}
            onClose={onClose}
            open
            headline="Регистрация"
            onFormSubmit={(e) => {
                e.preventDefault();
                register();
            }}
            hideBackdrop
            hasCloseIcon
            content={
                <Fragment>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        error={status === "invalidEmail"}
                        label="Email"
                        autoFocus
                        autoComplete="off"
                        type="email"
                        onChange={() => {
                            if (status === "invalidEmail") {
                                setStatus(null);
                            }
                        }}
                        FormHelperTextProps={{error: true}}
                    />
                    <VisibilityPasswordTextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        error={
                            status === "passwordTooShort" || status === "passwordsDontMatch"
                        }
                        label="Пароль"
                        inputRef={registerPassword}
                        autoComplete="off"
                        onChange={() => {
                            if (
                                status === "passwordTooShort" ||
                                status === "passwordsDontMatch"
                            ) {
                                setStatus(null);
                            }
                        }}
                        helperText={(() => {
                            if (status === "passwordTooShort") {
                                return "Пароль должен быть больше 5 символов.";
                            }
                            if (status === "passwordsDontMatch") {
                                return "Пароли не совпадают.";
                            }
                            return null;
                        })()}
                        FormHelperTextProps={{error: true}}
                        isVisible={isPasswordVisible}
                        onVisibilityChange={setIsPasswordVisible}
                    />
                    <VisibilityPasswordTextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        error={status === "passwordsDontMatch"}
                        label="Повторите пароль"
                        inputRef={registerPasswordRepeat}
                        autoComplete="off"
                        onChange={() => {
                            if (
                                status === "passwordTooShort" ||
                                status === "passwordsDontMatch"
                            ) {
                                setStatus(null);
                            }
                        }}
                        helperText={(() => {
                            if (status === "passwordsDontMatch") {
                                return "Пароли не совпадают.";
                            }
                        })()}
                        FormHelperTextProps={{error: true}}
                        isVisible={isPasswordVisible}
                        onVisibilityChange={setIsPasswordVisible}
                    />
                    <FormControlLabel
                        style={{marginRight: 0}}
                        control={
                            <Checkbox
                                color="primary"
                                inputRef={registerTermsCheckbox}
                                onChange={() => {
                                    setHasTermsOfServiceError(false);
                                }}
                            />
                        }
                        label={
                            <Typography variant="body2">
                                Я согласен с
                                <span
                                    className={classes.link}
                                    onClick={isLoading ? null : openTermsDialog}
                                    tabIndex={0}
                                    role="button"
                                >
                  {" "}
                                    политикой конфиденциальности
                </span>
                            </Typography>
                        }
                    />
                    {hasTermsOfServiceError && (
                        <FormHelperText
                            error
                            style={{
                                display: "block",
                            }}
                        >
                            Для того чтобы создать учетную запись, вы должны принять нашу политику конфиденциальности.
                        </FormHelperText>
                    )}
                    {status === "accountCreated" ? (
                        <HighlightedInformation>
                            Мы создали вашу учетную запись. Теперь вы можете войти в нашу систему.
                        </HighlightedInformation>
                    ) : (
                        <HighlightedInformation>
                            Регистрация отключена.
                        </HighlightedInformation>
                    )}
                </Fragment>
            }
            actions={
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    color="secondary"
                    disabled={isLoading}
                >
                    Зарегистрироваться
                    {isLoading && <ButtonCircularProgress/>}
                </Button>
            }
        />
    );
};

RegisterDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    openTermsDialog: PropTypes.func.isRequired,
    status: PropTypes.string,
    setStatus: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(RegisterDialog);
