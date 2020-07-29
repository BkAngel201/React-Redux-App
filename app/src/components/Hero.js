import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles({
    root: {
      width: "100%",
        "& .MuiListItem-root": {
            paddingBottom: 0,
            paddingTop: 0
        }
    },
    media: {
      height: 130,
      width: 380
    },
    actionArea: {
        display: "flex",
        flexDirection: "row",
        "& .MuiCardContent-root": {
            width: "100%"
        }
    },
    role: {
        "& .MuiChip-root": {
            height: 26,
            fontSize: ".7rem"
        }
        
    }
  });

function Hero(props) {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image={`https://api.opendota.com${props.hero.img}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${props.hero.localized_name} (${props.hero.primary_attr})`}
          </Typography>
          <div className={classes.role}>
              {props.hero.roles.map(role => (
                  <Chip label={role} />
              ))}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid item xs={3}>
            <ListItem>
                <ListItemText
                primary="Agi x Lvl"
                secondary={props.hero.agi_gain}
                />
            </ListItem>
            <ListItem>
                <ListItemText
                primary="Base Agi"
                secondary={props.hero.base_agi}
                />
            </ListItem>
        </Grid>
        <Grid item xs={3}>
            <ListItem>
                <ListItemText
                primary="Str x Lvl"
                secondary={props.hero.str_gain}
                />
            </ListItem>
            <ListItem>
                <ListItemText
                primary="Base Str"
                secondary={props.hero.base_str}
                />
            </ListItem>
        </Grid>
        <Grid item xs={3}>
            <ListItem>
                <ListItemText
                primary="Int x Lvl"
                secondary={props.hero.int_gain}
                />
            </ListItem>
            <ListItem>
                <ListItemText
                primary="Base Int"
                secondary={props.hero.base_int}
                />
            </ListItem>
        </Grid>
        <Grid item xs={3}>
            <ListItem>
                <ListItemText
                primary="Base Armor"
                secondary={props.hero.base_armor}
                />
            </ListItem>
            <ListItem>
                <ListItemText
                primary="Speed"
                secondary={props.hero.move_speed}
                />
            </ListItem>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default Hero