import { useState } from "react";
import { Container, Text, VStack, Box, Heading, Flex } from "@chakra-ui/react";
import QrReader from "react-qr-reader";

const Index = () => {
  const [qrData, setQrData] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      setQrData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Flex width="100%" justifyContent="center" bg="blue.500" p={4} color="white" borderRadius="md">
          <Heading as="h1" size="lg">QR Code Scanner</Heading>
        </Flex>
        <Box width="100%" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
        </Box>
        <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" width="100%">
          <Text fontSize="lg">Scanned QR Code Content:</Text>
          <Text mt={2} fontSize="md" wordBreak="break-all">{qrData}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;