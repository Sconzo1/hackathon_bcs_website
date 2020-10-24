import React, {Fragment, useCallback, useRef, useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {withRouter} from "react-router-dom";
import {Button, TextField, Typography, withStyles,} from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";
import axios from "axios";

const styles = (theme) => ({
    forgotPassword: {
        marginTop: theme.spacing(2),
        color: theme.palette.primary.main,
        cursor: "pointer",
        "&:enabled:hover": {
            color: theme.palette.primary.dark,
        },
        "&:enabled:focus": {
            color: theme.palette.primary.dark,
        },
    },
    disabledText: {
        cursor: "auto",
        color: theme.palette.text.disabled,
    },
    formControlLabel: {
        marginRight: 0,
    },
});

const LoginDialog = ({
                         setStatus,
                         history,
                         classes,
                         onClose,
                         openChangePasswordDialog,
                         status,
                     }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const loginEmail = useRef();
    const loginPassword = useRef();


    const login = useCallback(() => {
        setIsLoading(true);
        setStatus(null);

        let payload = {
            operation: "login",
            user: {
                email: loginEmail.current.value,
                password: loginPassword.current.value
            }
        }

        axios.post('http://project/bin/index.php', payload)
            .then(response => {
                if (response.data.result === "success") {
                    localStorage.setItem("user", JSON.stringify(response.data.user))
                    history.push("/c/timetable");
                } else {
                    alert("ERROR")
                    setIsLoading(false);
                }
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            })
    }, [setIsLoading, loginEmail, loginPassword, history, setStatus]);

    return (
        <Fragment>
            <FormDialog
                open
                onClose={onClose}
                loading={isLoading}
                onFormSubmit={(e) => {
                    e.preventDefault();
                    login();
                }}
                hideBackdrop
                headline="Вход"
                content={
                    <Fragment>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            error={status === "invalidEmail"}
                            required
                            fullWidth
                            label="Email"
                            inputRef={loginEmail}
                            autoFocus
                            autoComplete="off"
                            type="email"
                            onChange={() => {
                                if (status === "invalidEmail") {
                                    setStatus(null);
                                }
                            }}
                            helperText={
                                status === "invalidEmail" &&
                                "Неправильный email."
                            }
                            FormHelperTextProps={{error: true}}
                        />
                        <VisibilityPasswordTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            error={status === "invalidPassword"}
                            label="Пароль"
                            inputRef={loginPassword}
                            autoComplete="off"
                            onChange={() => {
                                if (status === "invalidPassword") {
                                    setStatus(null);
                                }
                            }}
                            helperText={
                                status === "invalidPassword" ? (
                                    <span>
                    Неправильный пароль. Попробуйте снова. Если забыли пароль, нажмите{" "}
                                        <b>&quot;Забыли пароль?&quot;</b>.
                  </span>
                                ) : (
                                    ""
                                )
                            }
                            FormHelperTextProps={{error: true}}
                            onVisibilityChange={setIsPasswordVisible}
                            isVisible={isPasswordVisible}
                        />
                        {status === "verificationEmailSend" ? (
                            <HighlightedInformation>
                                Мы отправили письмо на вашу почту для смены пароля.
                            </HighlightedInformation>
                        ) : (
                            <HighlightedInformation>
                                Для теста:
                                <br/>
                                Email: <b>test@web.com</b>
                                <br/>
                                Пароль: <b>HaRzwc</b>
                            </HighlightedInformation>
                        )}
                    </Fragment>
                }
                actions={
                    <Fragment>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            disabled={isLoading}
                            size="large"
                        >
                            Войти
                            {isLoading && <ButtonCircularProgress/>}
                        </Button>
                        <Typography
                            align="center"
                            className={classNames(
                                classes.forgotPassword,
                                isLoading ? classes.disabledText : null
                            )}
                            color="primary"
                            onClick={isLoading ? null : openChangePasswordDialog}
                            tabIndex={0}
                            role="button"
                        >
                            Забыли пароль?
                        </Typography>
                    </Fragment>
                }
            />
        </Fragment>
    );
};

LoginDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    setStatus: PropTypes.func.isRequired,
    openChangePasswordDialog: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    status: PropTypes.string,
};

export default withRouter(withStyles(styles)(LoginDialog));
