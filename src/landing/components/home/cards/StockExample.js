import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    image: {
        height: 48,
        width: 48
    },
    textStyle: {
        fontFamily: "'Montserrat', sans-serif",
        color: '#fff',
        textTransform: 'uppercase',
        
    }
});

export default function StockExample({ Name, TimePeriod, MinSum, YearPercent, Image, Color }) {
    const classes = useStyles();
    const gradient = 'linear-gradient(90deg, ' + Color + ' 40%, #fff 150%)'

    return (
        <Card className={classes.root} style={{ background: Color }}>
            <CardActionArea className={classes.textStyle}>
                <CardContent>
                    <Grid container direction='column' justyfy='flex-start'>

                        <Grid item container direction='row' justify="space-between" alignItems="flex-start">
                            <Grid item xs={9}>
                                <Typography variant='subtitle1' style={{fontWeight: 500, letterSpacing: 0, lineHeight: '1.1', fontSize: '0.95rem'}}>{Name}</Typography>
                            </Grid>
                            <Grid item xs={3} style={{flexBasis: 0}}>
                                <img src={Image} className={classes.image} />
                            </Grid>
                        </Grid>

                        <Grid item container direction='row' justify="flex-start" alignItems="flex-start" style={{paddingTop: 24}}>
                            <Grid item xs={5}>
                                <Typography variant='h6' style={{fontWeight: 500, lineHeight: '1.1'}}>{TimePeriod}</Typography>
                                <Typography style={{fontWeight: 200, lineHeight: '1.1', fontSize: '0.8rem'}}>срок</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant='h6' style={{fontWeight: 500, lineHeight: '1.1'}}>{MinSum}</Typography>
                                <Typography style={{fontWeight: 200, lineHeight: '1.1', fontSize: '0.8rem'}}>Минимальная сумма</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions style={{ background: gradient, padding: '16px' }}>
                    <Grid container direction='column'>
                        <Grid item>
                            <Typography variant='h3' style={{fontWeight: 600, lineHeight: '1.1'}}>{YearPercent}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{fontWeight: 300, lineHeight: '1.1', fontSize: '0.8rem'}}>Годовая доходность</Typography>
                        </Grid>
                    </Grid>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
