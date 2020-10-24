import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {TableCell, TableHead, TableRow, TableSortLabel, Tooltip, Typography, withStyles} from "@material-ui/core";

const styles = theme => ({
    tableSortLabel: {
        cursor: "text",
        userSelect: "auto",
        color: "inherit !important"
    },
    noIcon: {
        "& path": {
            display: "none !important"
        }
    },
    paddingFix: {
        paddingLeft: theme.spacing(3)
    }
});

const EnhancedTableHead = ({order, rows, onRequestSort, classes}) => {
    return (
        <TableHead>
            <TableRow>
                {rows.map((row, index) => (
                    <TableCell
                        key={index}
                        align="inherit"
                        padding="default"
                        className={index === 0 ? classes.paddingFix : null}
                    >
                        {onRequestSort ? (
                            <Tooltip
                                title="Sort"
                                placement="bottom-start"
                                enterDelay={300}
                            >
                                <TableSortLabel
                                    direction={order}
                                >
                                    <Typography variant="body2">{row.label}</Typography>
                                </TableSortLabel>
                            </Tooltip>
                        ) : (
                            <TableSortLabel
                                className={classNames(classes.tableSortLabel, classes.noIcon)}
                            >
                                <Typography variant="body2" className={classes.label}>
                                    {row.label}
                                </Typography>
                            </TableSortLabel>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func,
    order: PropTypes.string,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles, {withTheme: true})(EnhancedTableHead);
