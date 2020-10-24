import * as React from 'react';
import {useEffect, useState} from 'react';
import {ViewState} from '@devexpress/dx-react-scheduler';
import {
    Appointments,
    AppointmentTooltip,
    DateNavigator,
    DayView,
    MonthView,
    Resources,
    Scheduler,
    Toolbar,
    ViewSwitcher,
    WeekView,
} from '@devexpress/dx-react-scheduler-material-ui';
import {createStyles, isWidthUp, withStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {fade} from '@material-ui/core/styles/colorManipulator';
import classNames from "classnames";
import theme from "../../../theme";
import withWidth from "@material-ui/core/withWidth";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import axios from "axios";


const styles = ({palette}) => createStyles({
    appointment: {
        borderRadius: 0,
        borderBottom: 0,
    },
    weekEndCell: {
        backgroundColor: fade(palette.action.disabledBackground, 0.04),
        '&:hover': {
            backgroundColor: fade(palette.action.disabledBackground, 0.04),
        },
        '&:focus': {
            backgroundColor: fade(palette.action.disabledBackground, 0.04),
        },
    },
    weekEndDayScaleCell: {
        backgroundColor: fade(palette.action.disabledBackground, 0.06),
    },
    text: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    content: {
        opacity: 0.7,
    },
    container: {
        width: '100%',
        lineHeight: 1.2,
        height: '100%',
    },
    button: {
        paddingLeft: 8,
        paddingRight: 8,
        width: 80,
        '@media (max-width: 800px)': {
            width: 16,
            fontSize: '0.75rem',
        },
    },
    selectedButton: {
        background: theme.palette.secondary.main,
        color: "white",
        '&:hover': {
            background: theme.palette.secondary.dark,
        },
    },
    locationSelector: {
        marginLeft: 8,
        height: 40,
    },
});

const isWeekEnd = (date) => date.getDay() === 0;

const MonthViewDayScaleCell = withStyles(styles)(({
                                                      startDate, classes, ...restProps
                                                  }) => (
    <MonthView.DayScaleCell
        className={classNames({
            [classes.weekEndDayScaleCell]: isWeekEnd(startDate),
        })}
        startDate={startDate}
        {...restProps}
    />
));

const MonthViewTimeTableCell = withStyles(styles)((
    {startDate, classes, ...restProps},
) => (
    <MonthView.TimeTableCell
        className={classNames({
            [classes.weekEndCell]: isWeekEnd(startDate),
        })}
        startDate={startDate}
        {...restProps}
    />
));

const WeekViewDayScaleCell = withStyles(styles)(({
                                                     startDate, classes, ...restProps
                                                 }) => (
    <WeekView.DayScaleCell
        className={classNames({
            [classes.weekEndDayScaleCell]: isWeekEnd(startDate),
        })}
        startDate={startDate}
        {...restProps}
    />
));

const WeekViewTimeTableCell = withStyles(styles)((
    {startDate, classes, ...restProps},
) => (
    <WeekView.TimeTableCell
        className={classNames({
            [classes.weekEndCell]: isWeekEnd(startDate),
        })}
        startDate={startDate}
        {...restProps}
    />
));

const Appointment = withStyles(styles)(({
                                            classes, data, ...restProps
                                        }) => (
    <Appointments.Appointment
        {...restProps}
        className={classNames(classes.appointment)}
        data={data}
    />
));

const AppointmentContent = withStyles(styles, {name: 'AppointmentContent'})(({
                                                                                 classes, data, ...restProps
                                                                             }) => {
    let typeName = "";
    if (data.type === "Обязательный") typeName = 'обяз.';
    if (data.type === "Необязательный") typeName = 'необяз.';
    if (data.type === "Дополнительный") typeName = 'доп.';

    let locName;
    const arr = data.location.split(" ")
    if (arr.length > 1) {
        locName = arr[0].substring(0, 1).toLowerCase() + ". " + arr[1]
    } else {
        locName = data.location.substring(0, 5).toLowerCase() + ".";
    }

    return (
        <Appointments.AppointmentContent {...restProps} data={data}>
            <div className={classes.container}>
                <div className={classes.text}>
                    {data.title}
                </div>
                <div className={classNames(classes.text, classes.content)}>
                    {`Место: ${locName}`}
                </div>
                <div className={classNames(classes.text, classes.content)}>
                    {`Тип: ${typeName}`}
                </div>
            </div>
        </Appointments.AppointmentContent>
    );
});

const SchoolScheduler = ({width}) => {
    const [sample, setSample] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [enabledBtn, setEnabledBtn] = useState(["1", "2", "3"]);

    const typeColors = [theme.palette.bgDateCellColor.main,
        theme.palette.bgDateCellColor.dark, theme.palette.bgDateCellColor.light];
    const locColors = [theme.palette.secondary.main,
        theme.palette.secondary.light, theme.palette.secondary.dark];
    const teachersColors = [theme.palette.primary.main,
        theme.palette.primary.light, theme.palette.primary.dark];

    function getSchedule() {
        const payload = {
            operation: "getSchedule",
            user: {
                un_id: JSON.parse(localStorage.getItem("user")).un_id
            }
        }
        axios.post('http://project/bin/index.php', payload)
            .then(response => {
                if (response.data.result === "success") {
                    if (response.data.schedule.length !== 0) {
                        const temps = response.data.schedule.map(element => ({
                            title: element.subject,
                            startDate: new Date(element.date_start),
                            endDate: new Date(element.date_end),
                            ...element
                        }))
                        setSchedule(temps)
                        setSample(temps)
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

    let flags = [];
    let typesInst = schedule.map(element => ({
        id: element.id_type,
        text: element.type,
        color: typeColors[element.id_type % typeColors.length]
    })).filter(element => {
        if (flags[element.id]) {
            return false;
        }
        flags[element.id] = true;
        return true;
    });

    flags = [];
    let locInst = schedule.map(element => ({
        id: element.id_location,
        text: element.location,
        color: locColors[element.id_location % locColors.length]
    })).filter(element => {
        if (flags[element.id]) {
            return false;
        }
        flags[element.id] = true;
        return true;
    });

    flags = [];
    let teachersInst = schedule.map(element => ({
        id: element.id_teacher,
        text: element.surname_teacher + " " + element.name_teacher,
        color: teachersColors[element.id_teacher % teachersColors.length]
    })).filter(element => {
        if (flags[element.id]) {
            return false;
        }
        flags[element.id] = true;
        return true;
    });

    const resources = [{
        fieldName: 'id_type',
        title: 'Тип урока:',
        instances: typesInst
    }, {
        fieldName: 'id_location',
        title: 'Место:',
        instances: locInst
    }, {
        fieldName: 'id_teacher',
        title: 'Учитель:',
        instances: teachersInst
    }];

    const getButtonClass = (classes, typeId) => {
        if (enabledBtn.includes(typeId)) {
            return classes.selectedButton
        }
    };
    const handleButtonClick = (appointmentTypeId) => {
        const l = enabledBtn
        if (l.includes(appointmentTypeId)) {
            const i = l.indexOf(appointmentTypeId)
            if (i > -1) {
                l.splice(i, 1)
            }
        } else {
            l.push(appointmentTypeId)
        }
        const list = []
        l.forEach(typeId => {
            list.push(...schedule.filter(sc => sc.id_type === typeId))
        })
        setSample(list)
        setEnabledBtn(l)
    };
    const LocationSelector = withStyles(styles, {name: 'LocationSelector'})(({lessonTypes, classes}) => (
        <ButtonGroup>
            {lessonTypes.map(type => (
                <Button
                    className={classNames(classes.button, getButtonClass(classes, type.id))}
                    onClick={() => handleButtonClick(type.id)}
                    key={type.id}
                >
                    <span>{isWidthUp("sm", width) ? type.text.substring(0, 1) : type.text.substring(0, 1)}</span>
                </Button>
            ))}
        </ButtonGroup>
    ));
    const FlexibleSpace = withStyles(styles, {name: 'FlexibleSpace'})(
        ({classes, ...restProps}) => (
            <Toolbar.FlexibleSpace {...restProps}>
                <LocationSelector
                    lessonTypes={typesInst}/>
            </Toolbar.FlexibleSpace>
        ),
    );

    useEffect(getSchedule, []);

    return <Paper>
        <Scheduler
            data={sample}
            locale="ru"
            firstDayOfWeek={1}
        >
            <ViewState
                defaultCurrentViewName={isWidthUp("sm", width) ? "Неделя" : "День"}
            />
            <WeekView
                startDayHour={7}
                endDayHour={18}
                dayScaleCellComponent={WeekViewDayScaleCell}
                timeTableCellComponent={WeekViewTimeTableCell}
                name="Неделя"
            />
            <MonthView
                dayScaleCellComponent={MonthViewDayScaleCell}
                timeTableCellComponent={MonthViewTimeTableCell}
                name="Месяц"
            />
            <DayView
                startDayHour={7}
                endDayHour={18}
                name="День"
            />
            <Appointments
                appointmentComponent={Appointment}
                appointmentContentComponent={AppointmentContent}
            />
            <Resources
                data={resources}
            />
            <AppointmentTooltip
                showCloseButton
            />
            <Toolbar flexibleSpaceComponent={FlexibleSpace}/>
            <DateNavigator/>
            <ViewSwitcher/>
        </Scheduler>
    </Paper>
};

export default withWidth()(SchoolScheduler);
