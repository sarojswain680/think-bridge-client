import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './common.css';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: 20,
        boxShadow: "10px 10px 5px grey"
    },
    media: {
        height: 0,
        paddingTop: '100.25%',
        backgroundColor: '#D3D3D3',
        margin: 10
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function CardView(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} id="card" data-testid="button">
            <CardMedia
                className={classes.media}
                image={props.data["photo"]}
            />
            <CardContent>
                <Typography paragraph id="text">
                    {"Product Name:- " + props.data["name"]}
                </Typography>
                <Typography paragraph>
                    {"Description:- " + props.data["description"]}
                </Typography>
                <Typography paragraph>
                    {"Price:- " + props.data["price"]}
                </Typography>
            </CardContent>
        </Card>
    );
}