
import React from 'react'
import { makeStyles,withStyles } from "@material-ui/core";

//To cenver the rules is Material UI we use two rules 
//withStyles & makeStyles
//Css rules in JSS

//makeStyles
// const useStyles= makeStyles({
//     sideMenu:{
//         display:'flex',
//         flexDirection: 'column',
//         position: 'absolute',
//         left: '0px',
//         width: '320px',
//         height: '100vh',
//         backgroundColor: '#253053'
//     }
// })
const styles= {
    sideMenu:{
        display:'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100vh',
        backgroundColor: '#253053'
    }
}

const  SideMenu=(props)=> {
    //const classes= useStyles();
    const {classes}=props;
    return (
        <div className={classes.sideMenu}>
           
        </div>
    )
}

export default withStyles(styles) (SideMenu)
