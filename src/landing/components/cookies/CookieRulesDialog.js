import React from "react";
import PropTypes from "prop-types";
import {Dialog, DialogActions, DialogContent, DialogTitle, Typography, withStyles} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = theme => ({
    dialogActions: {
        justifyContent: "flex-start",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    dialog: {
        zIndex: 1400
    },
    backIcon: {
        marginRight: theme.spacing(1)
    }
});

const CookieRulesDialog = ({classes, onClose, open, theme}) => (
    <Dialog
        open={open}
        scroll="paper"
        onClose={onClose}
        className={classes.dialog}
    >
        <DialogTitle>Политика использования cookie</DialogTitle>
        <DialogContent>
            <Typography variant="h6" color="primary" paragraph>
                Что такое файлы cookie?
            </Typography>
            <Typography paragraph>
                Файл cookie – это небольшой текстовый файл, который помещается на компьютер, мобильный телефон или
                другое устройство при посещении вами веб-сайта, и используется для идентификации устройства пользователя
                и сбора информации.
            </Typography>
            <Typography paragraph>
                Помимо файлов cookie используются другие технологии отслеживания, которые аналогичны файлам cookie
                (например, веб-маяки, также называемые пиксельными тегами, веб-жучками или анимациями). Все указанные
                технологии в настоящей Политике далее обозначены как «файлы cookie».
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
                Как мы используем файлы cookie?
            </Typography>
            <Typography paragraph>
                Мы используем файлы cookie для получения с вашего устройства информации, такой как: тип вашего
                устройства, операционная система, IP-адрес, время посещения и другие технические данные, которые
                позволяют узнать, как вы взаимодействуете с нашим сайтом и электронными средствами связи. Мы распознаем
                ваше устройство, но не конкретное физическое лицо.
            </Typography>
            <Typography paragraph>
                Использование файлов cookie помогает улучшить качество работы нашего веб-сайта, позволяет эффективно
                перемещаться между страницами, запоминать ваши предпочтения, повышать релевантность рекламы и улучшать
                пользовательский опыт.
            </Typography>
            <Typography paragraph>
                Теги и файлы cookie, используемые на нашем сайте, обслуживаются нами.
            </Typography>
            <Typography variant="h6" color="primary" paragraph>
                Как управлять файлами cookie?
            </Typography>
            <Typography paragraph>
                Вы можете управлять файлами cookie в настройках своего браузера, у вас всегда есть возможность изменить
                эти параметры, принимая, отклоняя или удаляя файлы cookie.
            </Typography>
            <Typography paragraph>
                Блокировка или удаление файлов cookie может помешать вам использовать наш веб-сайт. Настройки в разных
                браузерах могут различаться, для управления файлами cookie следует обратиться к соответствующему разделу
                в настройках браузера.
            </Typography>
            <Typography paragraph>
                Большинство мобильных устройств позволяют изменять настройки файлов cookie в настройках операционной
                системы мобильного устройства.
            </Typography>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
            <ColoredButton
                onClick={onClose}
                variant="contained"
                color={theme.palette.common.black}
            >
                <ArrowBackIcon className={classes.backIcon}/>
                Назад
            </ColoredButton>
        </DialogActions>
    </Dialog>
);

CookieRulesDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(CookieRulesDialog);
