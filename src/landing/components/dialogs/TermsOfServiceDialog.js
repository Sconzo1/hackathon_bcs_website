import React from "react";
import PropTypes from "prop-types";
import {Dialog, DialogActions, DialogContent, DialogTitle, Typography, withStyles} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../../shared/components/ColoredButton";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    termsConditionsListitem: {
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(1)
    },
    dialogActions: {
        justifyContent: "flex-start",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    backIcon: {
        marginRight: theme.spacing(1)
    }
});

const TermsOfServiceDialog = ({classes, open, onClose, theme}) => (
    <Dialog open={open} scroll="paper" onClose={onClose} hideBackdrop>
        <DialogTitle>Политика конфиденциальности</DialogTitle>
        <DialogContent>
            <Typography variant="h6" color="primary" paragraph>
                Определение терминов
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet.
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren.
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
                Общие положения
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren,
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
                Предмет политики конфиденциальности
            </Typography>
            <Typography paragraph>
                You are specifically restricted from all of the following:
            </Typography>
            <Typography className={classes.termsConditionsListitem}>
                - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography className={classes.termsConditionsListitem}>
                - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography className={classes.termsConditionsListitem}>
                - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography className={classes.termsConditionsListitem}>
                - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography className={classes.termsConditionsListitem}>
                - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
            </Typography>
            <Typography className={classes.termsConditionsListitem}>
                - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography className={classes.termsConditionsListitem}>
                - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography className={classes.termsConditionsListitem} paragraph>
                - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren,
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
                Цели сбора персональной информации пользователя
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
                Способы и сроки обработки персональной информации
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
                Права и обязанности сторон
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
                Ответственность сторон
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
                Разрешение споров
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
                Дополнительные условия
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            </Typography>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
            <Button
                onClick={onClose}
                variant="contained"
                style={{
                    background:"linear-gradient(90deg, #8A8AF4 0%, #3984DD 100%)",
                    color: "white"
                }}
            >
                <ArrowBackIcon className={classes.backIcon}/>
                Назад
            </Button>
        </DialogActions>
    </Dialog>
);

TermsOfServiceDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(TermsOfServiceDialog);
