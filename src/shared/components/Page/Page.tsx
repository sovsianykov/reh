import React, {FunctionComponent} from 'react';
import {makeStyles} from "@mui/styles";


export interface PageProps {
    children: JSX.Element | JSX.Element[]
}
 const useStyles = makeStyles({
     root : {
         margin: "60px auto 0 auto",
         maxWidth: 1600
     }
 })


const Page:FunctionComponent<PageProps> = ({children}) => {
   const classes = useStyles()
    return (<main className={classes.root}>
      {children}
  </main>);
};

export default Page;