import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Flex direction="column" minH="100vh">
        <Box as="header" bg="blue.500" color="white" py={4} px={8}>
          <Heading as="h1" size="lg">QR Code Scanner</Heading>
        </Box>
        <Box as="main" flex="1">
          <Routes>
            <Route exact path="/" element={<Index />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;