import { useState, useEffect } from "react";
import { Container, Text, VStack, Box, Heading, Flex } from "@chakra-ui/react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Index = () => {
  const [qrData, setQrData] = useState("No result");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      /* verbose= */ false
    );

    scanner.render(
      (decodedText, decodedResult) => {
        setQrData(decodedText);
      },
      (errorMessage) => {
        console.error(errorMessage);
      }
    );

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Flex width="100%" justifyContent="center" bg="blue.500" p={4} color="white" borderRadius="md">
          <Heading as="h1" size="lg">QR Code Scanner</Heading>
        </Flex>
        <Box width="100%" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
          <div id="reader" style={{ width: "100%" }}></div>
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