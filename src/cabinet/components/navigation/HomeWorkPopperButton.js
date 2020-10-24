import React, {Fragment, useCallback, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import {
    AppBar,
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Popover,
    Typography,
    withStyles,
} from "@material-ui/core";
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeWorkListItem from "./HomeWorkListItem";
import axios from "axios";

const styles = (theme) => ({
    tabContainer: {
        overflowY: "auto",
        maxHeight: 350,
    },
    popoverPaper: {
        width: "100%",
        maxWidth: 350,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            maxWidth: 270,
        },
    },
    divider: {
        marginTop: -2,
    },
    noShadow: {
        boxShadow: "none !important",
    },
});

const HomeWorkPopperButton = ({classes}) => {
    const anchorEl = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [homework, setHomework] = useState([]);

    const handleClick = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen, setIsOpen]);

    const handleClickAway = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);


    function getHomework() {
        const payload = {
            operation: "getHomework",
            user: {
                un_id: JSON.parse(localStorage.getItem("user")).un_id
            }
        }
        axios.post('http://project/bin/index.php', payload)
            .then(response => {
                if (response.data.result === "success") {
                    if (response.data.homework.length !== 0) {
                        setHomework(response.data.homework)
                    }
                } else {
                    // alert("ERROR");
                    // console.log("Ошибка");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(getHomework, []);



    const id = isOpen ? "scroll-playground" : null;

    return (
        <Fragment>
            <IconButton
                onClick={handleClick}
                buttonRef={anchorEl}
                aria-label="Открыть д/з"
                aria-describedby={id}
                color="primary"
            >
                <AssignmentIcon/>
            </IconButton>
            <Popover
                disableScrollLock
                id={id}
                open={isOpen}
                anchorEl={anchorEl.current}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                classes={{paper: classes.popoverPaper}}
                onClose={handleClickAway}
            >
                <AppBar position="static" color="inherit" className={classes.noShadow}>
                    <Box pt={1} pl={2} pb={1} pr={1}>
                        <Typography variant="subtitle1">Домашнее задание</Typography>
                    </Box>
                    <Divider className={classes.divider}/>
                </AppBar>
                <List dense className={classes.tabContainer}>
                    {homework.length === 0 ? (
                        <ListItem>
                            <ListItemText>
                                Нет домашнего задания.
                            </ListItemText>
                        </ListItem>
                    ) : (
                        homework.map((element, index) => (
                            <HomeWorkListItem
                                key={index}
                                homework={element}
                                divider={index !== homework.length - 1}
                            />
                        ))
                    )}
                </List>
            </Popover>
        </Fragment>
    );
};

HomeWorkPopperButton.propTypes = {
    classes: PropTypes.object.isRequired,
    homework: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, {withTheme: true})(HomeWorkPopperButton);
