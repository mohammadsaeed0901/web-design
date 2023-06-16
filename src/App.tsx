import { ThemeProvider } from '@mui/material/styles';
import Routes from 'Routes/Routes.component';
import { mainTheme } from 'Themes/mainTheme';
import { useMemo } from 'react';

const App = () => {
  let theme = useMemo(() => mainTheme("light"), []);
  
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
