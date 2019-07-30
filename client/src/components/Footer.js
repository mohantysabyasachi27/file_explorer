import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function MadeWithLove() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Built with 💙 by the '}
        <Link color="inherit" href="http://solarspell.org//">
          SolarSPELL
        </Link>
        {' team.'}
      </Typography>
    );
  }
  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    footer: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(6)
    },
  }));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer style={{ position: 'fixed',
            bottom: '0',
            width: '100%',
            height: '32px',
            backgroundColor: '#f1eeee'}} className={classes.footer}>
        <MadeWithLove />
      </footer>
      );
}

export default Footer;