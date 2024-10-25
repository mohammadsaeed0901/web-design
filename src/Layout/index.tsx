import { Box, Container, styled, containerClasses } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { Suspense, useState } from "react";
import Loading from "Components/Loading/Loading.component";
import { TabContext } from "./Header/TabContext.component";

const StyledContainer = styled(Container)(() => ({
  [`&.${containerClasses.root}`]: {
    paddingLeft: "2rem",
    paddingRight: "2rem",
    width: "100%",
    maxWidth: "1400px",
    minHeight: "100%",
  },
}));

const Index = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <TabContext.Provider value={{
      value: value,
      setValue: setValue,
    }}>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Box component="main" sx={{ flex: 1, marginY: "6rem", position: "relative" }}>
          <StyledContainer>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </StyledContainer>
        </Box>
      </Box>
    </TabContext.Provider>
  );
};

export default Index;
