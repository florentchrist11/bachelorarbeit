import React from 'react';
import {Outlet} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import TopBar from './TopBar';
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    width: '100%'
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    width: '100%'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
    width: '100%'
  }
}));

const MainLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>

            <Outlet />

            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
