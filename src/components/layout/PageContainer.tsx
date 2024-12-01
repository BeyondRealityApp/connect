'use client';  

import { Box } from "@mui/material";
import theme from "@/theme";

type PageContainerProps = Readonly<{
  children: React.ReactNode;
}>;

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
