import React, {useCallback, useState} from "react";
import PropTypes from "prop-types";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from 'date-fns/locale/ru';

const HomeWorkListItem = ({homework, divider}) => {
    const [hasErrorOccurred, setHasErrorOccurred] = useState(false);

    const handleError = useCallback(() => {
        setHasErrorOccurred(true);
    }, [setHasErrorOccurred]);

    const date = (new Date(homework.date))

    const mo = new Intl.DateTimeFormat('ru', {month: 'short'}).format(date)
    const da = new Intl.DateTimeFormat('ru', {day: 'numeric'}).format(date)

    function formatDistanceDay(date) {
        const oneDay = 1000 * 3600 * 24;
        let distance = Date.now() - date.getTime();
        if (distance < oneDay && distance > 0) {
            return "в течение дня";
        }
        distance = date.getTime() - Date.now();
        if (distance < oneDay && distance > 0) {
            return "завтра";
        }
        return formatDistanceToNow(date, {
            locale: ruLocale
        })
    }

    return (
        <ListItem divider={divider}>
            <ListItemAvatar>
                {hasErrorOccurred ? (
                    <ErrorIcon color="secondary"/>
                ) : (
                    <Avatar
                        onError={handleError}>{homework.subject.substring(0, 3)}</Avatar>
                )}
            </ListItemAvatar>
            <ListItemText
                primary={homework.description}
                secondary={`${da} ${mo} (...${formatDistanceDay(date)})`}
            />
        </ListItem>
    );
};

HomeWorkListItem.propTypes = {
    message: PropTypes.object,
    divider: PropTypes.bool
};

export default HomeWorkListItem;
