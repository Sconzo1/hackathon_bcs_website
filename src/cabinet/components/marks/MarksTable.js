import React, {useCallback, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Table, TableBody, TableCell, TablePagination, TableRow, withStyles} from "@material-ui/core";
import EnhancedTableHead from "../../../shared/components/EnhancedTableHead";
import ColorfulChip from "../../../shared/components/ColorfulChip";
import unixToDateString from "../../../shared/functions/unixToDateString";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import axios from "axios";


const styles = theme => ({
    tableWrapper: {
        overflowX: "auto",
        width: "100%"
    },
    blackBackground: {
        backgroundColor: theme.palette.primary.main
    },
    contentWrapper: {
        padding: theme.spacing(3),
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(2)
        },
        width: "100%"
    },
    dBlock: {
        display: "block !important"
    },
    dNone: {
        display: "none !important"
    },
    firstData: {
        paddingLeft: theme.spacing(3)
    }
});

const rows = [
    {
        label: "Предмет"
    },
    {
        label: "Дата"
    },
    {
        label: "Описание"
    },
    {
        label: "Оценка"
    },
];

const rowsPerPage = 25;

const MarksTable = ({theme, classes}) => {
    const [page, setPage] = useState(0);
    const [marks, setMarks] = useState([]);

    const handleChangePage = useCallback(
        (_, page) => {
            setPage(page);
        },
        [setPage]
    );

    function getMarks() {
        const payload = {
            operation: "getMarks",
            user: {
                un_id: JSON.parse(localStorage.getItem("user")).un_id
            }
        }
        axios.post('http://project/bin/index.php', payload)
            .then(response => {
                if (response.data.result === "success") {
                    if (response.data.marks.length !== 0) {
                        setMarks(response.data.marks)
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

    useEffect(getMarks, []);

    if (marks.length > 0) {
        return (
            <div className={classes.tableWrapper}>
                <Table aria-labelledby="tableTitle">
                    <EnhancedTableHead rowCount={marks.length} rows={rows}/>
                    <TableBody>
                        {marks
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((mark, index) => (
                                <TableRow hover key={index}>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        className={classes.firstData}
                                    >
                                        {mark.subject}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {unixToDateString(mark.date)}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {mark.description}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {mark.value > 3 ? (
                                            <ColorfulChip
                                                label={`${mark.value}`}
                                                color="#7aa14b"
                                                style={{paddingLeft: 20, paddingRight: 20}}
                                            />
                                        ) : (
                                            <ColorfulChip
                                                label={`${mark.value}`}
                                                color={theme.palette.error.dark}
                                            />
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={marks.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        "aria-label": "Previous Page"
                    }}
                    nextIconButtonProps={{
                        "aria-label": "Next Page"
                    }}
                    onChangePage={handleChangePage}
                    classes={{
                        select: classes.dNone,
                        selectIcon: classes.dNone,
                        actions: marks.length > 0 ? classes.dBlock : classes.dNone,
                        caption: marks.length > 0 ? classes.dBlock : classes.dNone
                    }}
                    labelRowsPerPage=""
                />
            </div>
        );
    }

    return (
        <div className={classes.contentWrapper}>
            <HighlightedInformation>
                Еще нет оценок.
            </HighlightedInformation>
        </div>
    );
};

MarksTable.propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(MarksTable);
