import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';


function App() {
  return (
    <Box display={{base:'block', sm:'none'}} p={'20px 27px'} bgColor='#101010' h='100%' >
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
