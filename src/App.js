import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar';
import MediaPlayer from './Pages/MediaPlayer';


function App() {
  return (
    <Box display={{base:'block', sm:'none'}} p={'10px 20px'} bgColor='#101010' h='100vh' >
      <Navbar />
      <MediaPlayer />
    </Box>
  );
}

export default App;
