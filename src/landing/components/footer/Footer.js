import React, {useState} from "react";
import PropTypes from "prop-types";
import {Box, Grid, IconButton, isWidthUp, TextField, Typography, withStyles, withWidth} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import WaveBorder from "../../../shared/components/WaveBorder";
import ColoredButton from "../../../shared/components/ColoredButton";
import emailjs from 'emailjs-com';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

const styles = theme => ({
    footerInner: {
        backgroundColor: theme.palette.common.darkBlack,
        paddingTop: theme.spacing(8),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(6),
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(10),
            paddingLeft: theme.spacing(16),
            paddingRight: theme.spacing(16),
            paddingBottom: theme.spacing(10)
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: theme.spacing(10),
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
            paddingBottom: theme.spacing(10)
        }
    },
    brandText: {
        fontFamily: "'Baloo Bhaijaan', cursive",
        fontWeight: 400,
        color: theme.palette.common.white
    },
    footerLinks: {
        marginTop: theme.spacing(2.5),
        marginBot: theme.spacing(1.5),
        color: theme.palette.common.white
    },
    infoIcon: {
        color: `${theme.palette.common.white} !important`,
        backgroundColor: "#33383b",
        "&:hover": {
            backgroundColor: `${theme.palette.primary.main} !important`
        }
    },
    socialIcon: {
        fill: theme.palette.common.white,
        backgroundColor: "#33383b",
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        }
    },
    whiteBg: {
        backgroundColor: theme.palette.common.white
    }
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

const socialIcons = [
    {
        icon: (
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <title>Вконтакте</title>
                <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.25 16.996h-2.134c-1.205 0-1.409-.687-2.401-1.679-.897-.897-1.395-.209-1.374 1.068.006.339-.161.611-.566.611-1.264 0-3.08.178-4.918-1.806-1.883-2.033-3.857-6.111-3.857-6.513 0-.237.196-.344.524-.344h2.17c.574 0 .623.284.783.649.667 1.521 2.265 4.574 2.69 2.87.244-.978.344-3.245-.703-3.44-.594-.11.452-.746 1.968-.746.377 0 .786.041 1.205.137.769.179.771.523.761 1.026-.039 1.903-.269 3.184.233 3.507.479.31 1.739-1.717 2.403-3.281.183-.433.219-.722.734-.722h2.654c1.39 0-.182 1.997-1.383 3.557-.968 1.255-.916 1.28.209 2.324.803.744 1.75 1.76 1.75 2.336.002.272-.21.446-.748.446z"/>
            </svg>
        ),
        label: "VK",
        href: "https://vk.com"
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
                <title>Facebook</title>
                <path
                    d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
            </svg>
        ),
        label: "Facebook",
        href: "https://facebook.com"
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
    {
        icon: (
            <svg
                role="img"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Twitter</title>
                <path
                    d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
            </svg>
        ),
        label: "Twitter",
        href: "https://www.twitter.com/"
    }
];

const Footer = ({classes, theme, width, refFooter}) => {

    const [open, setOpen] = useState(false);

    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [message, setMessage] = useState("")

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function sendEmail(e) {
        e.preventDefault();

        let templateParams = {
            from_name: name,
            from_link: link,
            from_message: message,
        }

        emailjs.send(
            'service_fxb9e9j',
            'template_tuou4hh',
            templateParams,
            'user_GhodrW9LIOsqrBmysALt0'
        ).then(() => {
            setOpen(true)
        }, (error) => {
            console.log(error.text);
        });

        setName("");
        setLink("");
        setMessage("");
    }

    return (
        <footer className="lg-p-top" style={{zIndex: 1}}>
            <WaveBorder
                upperColor="#FFFFFF"
                lowerColor={theme.palette.common.darkBlack}
                animationNegativeDelay={4}
            />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
                    Сообщение отправлено!
                </MuiAlert>
            </Snackbar>
            <div className={classes.footerInner} ref={refFooter}>
                <Grid container spacing={isWidthUp("md", width) ? 10 : 5}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Box display="flex" justifyContent="center">
                            <div>
                                {infos.map((info, index) => (
                                    <Box display="flex" mb={2} key={index}>
                                        <Box mr={2}>
                                            <IconButton
                                                className={classes.infoIcon}
                                                tabIndex={-1}
                                            >
                                                {info.icon}
                                            </IconButton>
                                        </Box>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Typography variant="h6" className="text-white">
                                                {info.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <form onSubmit={sendEmail.bind(this)}>
                            <Box display="flex" flexDirection="column">
                                <Box mb={1}>
                                    <TextField
                                        variant="outlined"
                                        multiline
                                        placeholder="Кто ты?"
                                        inputProps={{"aria-label": "Кто ты?"}}
                                        InputProps={{
                                            className: classes.whiteBg
                                        }}
                                        rows={1}
                                        fullWidth
                                        required
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }}
                                    />
                                </Box>
                                <Box mb={1}>
                                    <TextField
                                        variant="outlined"
                                        multiline
                                        placeholder="Как с тобой связаться?"
                                        inputProps={{"aria-label": "Как с тобой связаться?"}}
                                        InputProps={{
                                            className: classes.whiteBg
                                        }}
                                        rows={1}
                                        fullWidth
                                        required
                                        value={link}
                                        onChange={(e) => {
                                            setLink(e.target.value)
                                        }}
                                    />
                                </Box>
                                <Box mb={1}>
                                    <TextField
                                        variant="outlined"
                                        multiline
                                        placeholder="Чем мы можем помочь тебе?"
                                        inputProps={{"aria-label": "Чем мы можем помочь тебе?"}}
                                        InputProps={{
                                            className: classes.whiteBg
                                        }}
                                        rows={3}
                                        fullWidth
                                        required
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value)
                                        }}
                                    />
                                </Box>
                                <ColoredButton
                                    color={theme.palette.common.white}
                                    variant="outlined"
                                    type="submit"
                                >
                                    Отправить
                                </ColoredButton>
                            </Box>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Typography variant="h6" paragraph className="text-white">
                            О компании
                        </Typography>
                        <Typography style={{color: "#8f9296"}} paragraph>
                            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
                            euismod convallis velit, eu auctor lacus vehicula sit amet.
                        </Typography>
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
            </div>
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
