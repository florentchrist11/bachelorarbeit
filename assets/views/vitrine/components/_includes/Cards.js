import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import DesccriptionDialog from "../../../../components/Tables/DesccriptionDialog";

const useStyles = makeStyles(({ breakpoints, spacing , shadows }) => ({

    root: {
        margin: 'auto',
        marginTop: spacing(1),
        borderRadius: spacing(1),
        transition: '1s',
        position: 'relative',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: spacing(2),
    },
    media: {
        width: '100%',
        marginTop: spacing(-3),
        height: 170,
        borderRadius: spacing(1),
        backgroundColor: '#fff',
        position: 'relative',
        boxShadow: shadows[6],
        [breakpoints.up('md')]: {
            width: '100%',
            marginTop: -20,
        },
        '&:after': {
            content: '" "',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(45deg, rgba(73,155,234,1) 0%, rgba(54,141,232,0.81) 46%, rgba(32,124,229,0.81) 100%)',
            borderRadius: spacing(1),
            opacity: 0.4,
        },
    },
}));

export default function ModalCard( { data }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}  >
            <CardActionArea>

                <Box width="90%" height={170} mx='auto'  >
                    <CardMedia
                        className={classes.media}
                        image={data.image}
                        title="calcul method"
                    />
                </Box>

                <CardContent>
                    <Typography mx='auto' gutterBottom variant="h5" component="h2">
                        {data.name}
                    </Typography>

                    <Typography variant="body2" color='textSecondary' component="p">
                        {data.minDesc}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Box mx='auto'>
                    <DesccriptionDialog data={data}/>
                </Box>
            </CardActions>
        </Card>
    );
}