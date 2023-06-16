import { Box, Container, styled, containerClasses } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Menu from "./Menu/Menu.component";
import MenuContext from "./Menu/MenuContext";

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
  return (
      <MenuContext>
        <Menu />
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Header />
          <Box component="main" sx={{ flex: 1, marginY: "6rem", position: "relative" }}>
            <StyledContainer>
                <Outlet />
            </StyledContainer>
          </Box>
        </Box>
      </MenuContext>
  );
};

export default Index;
