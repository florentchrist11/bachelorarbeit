import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {AppBar, Box, IconButton, makeStyles, Toolbar} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Logo from './../../components/Logo';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginLeft: '10px',
    color: theme.palette.text.primary
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary
  }
}));

const TopBar = ({
                  className,
                  onMobileNavOpen,
                  ...rest
                }) => {
  const classes = useStyles();

  return (
      <AppBar
          className={clsx(classes.root, className)}
          elevation={3}
          {...rest}
      >
        <Toolbar>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <Typography variant="h4" className={classes.name}>
            Multi Criteria Decision Making
          </Typography>

          <Box flexGrow={1} />
            {/*<IconButton className={classes.icon} href="#about">*/}
            {/*  <InfoIcon/>*/}
            {/*</IconButton>*/}

            {/*<IconButton className={classes.icon} >*/}
            {/*  <InvertColorsIcon />*/}
            {/*</IconButton>*/}
        </Toolbar>
      </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
