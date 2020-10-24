import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Divider, List, ListItemText, Paper, Toolbar, withStyles} from "@material-ui/core";
import MarksTable from "./MarksTable";

const styles = {
    divider: {
        backgroundColor: "rgba(128,128,128,0.26)"
    },
    toolbar: {
        justifyContent: "space-between"
    }
};

const Marks = ({classes, selectMarks}) => {

    useEffect(selectMarks, [selectMarks]);

    return (
        <Paper>
            <List disablePadding>
                <Toolbar className={classes.toolbar}>
                    <ListItemText primary="Оценки" secondary="За последнее время"/>
                </Toolbar>
                <Divider className={classes.divider}/>
                <MarksTable/>
            </List>
        </Paper>
    );
};

Marks.propTypes = {
    classes: PropTypes.object.isRequired,
    selectMarks: PropTypes.func.isRequired,
};

export default withStyles(styles)(Marks);
