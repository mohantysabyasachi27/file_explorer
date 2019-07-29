import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FolderOpen from '@material-ui/icons/Folder'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(1, 2),
    },
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }));
  
  const handleClick = (event) => {
    //event.preventDefault();
    //alert('You clicked a breadcrumb.');
  }
  
 const IconBreadcrumbs = ({path}) => {
    const classes = useStyles();
    
    const renderBreadCrumbs = (path) => {
      const folderList = path.split('/');
      
      console.log(folderList);
      return folderList.filter(folderName => folderName!=='').map((folder, index) => {
       return (<Link key={index}
         color="inherit"
         href="/getting-started/installation/"
         onClick={handleClick}
         className={classes.link}
       >
         <FolderOpen className={classes.icon} />
         {folder}
       </Link>)
      });
   
     }
    return (
      <Paper elevation={0} className={classes.root}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
            <HomeIcon className={classes.icon} />
            SolarSPELL
          </Link>
          {renderBreadCrumbs(path)}
          {/* <Typography color="textPrimary" className={classes.link}>
            <GrainIcon className={classes.icon} />
            Breadcrumb
          </Typography> */}
        </Breadcrumbs>
      </Paper>
    );
  }

  export default IconBreadcrumbs;