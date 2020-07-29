import React, { useState } from 'react';

import Hero from './Hero'
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fade, makeStyles } from '@material-ui/core/styles';


import {
    fetchingHeroesList,
} from "../actions/heroActions"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function HeroList(props) {
    const classes = useStyles();
    const [search, setSearch] = useState('')

    const handleOnChange = (e)=> {
        setSearch(e.target.value)
    }

    return (
        <>  
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    Dota2 Heroes
                </Typography>
                <div className={classes.search}>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleOnChange}
                    value={search}
                    />
                </div>
                <Button color="secondary" variant="contained" style={{marginLeft: 20}} onClick={props.fetchingHeroesList}>Fetch Heroes</Button>
                </Toolbar>
            </AppBar>
        </div>
            <Container style={{ display: "flex", flexWrap: "wrap"}}>
            <Backdrop className={classes.backdrop} open={props.isFetching} >
                <CircularProgress color="inherit" />
            </Backdrop>
                {props.heroes.length === 0 ? null:
                 search === '' ? props.heroes.map(el => (
                    <Grid item xs={6} style={{margin: "5px 0", padding: "5px"}}>
                        <Hero hero={el}/>
                    </Grid>
                ))
               : 
               props.heroes.filter(el => {
                   return el.localized_name.toLowerCase().includes(search.toLowerCase())
               }).map(el => (
                   <Grid item xs={6} style={{margin: "5px 0", padding: "5px"}}>
                        <Hero hero={el}/>
                    </Grid>
               ))}
            </Container>
        </>
    )
}

const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      heroes: state.heroes,
      errors: state.errors
    };
  };
  
export default connect(
    mapStateToProps,
    { 
        fetchingHeroesList,
    }
  )(HeroList);
