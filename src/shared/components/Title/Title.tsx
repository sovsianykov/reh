import React, { FunctionComponent } from "react";
import { PageTitle } from "./models";
import { Box, Typography } from "@mui/material";

interface TitleProps {
  children: PageTitle;
}

const Title: FunctionComponent<TitleProps> = ({children}) => {
  return (
    <Box flex="true">
      <Typography variant="h1">{children}</Typography>
    </Box>
  );
};

export default Title;
