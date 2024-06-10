import React, { useState, useEffect } from "react";
import { Container, VStack, Text, Box, Heading } from "@chakra-ui/react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Index = () => {
  const [qrData, setQrData] = useState("No result");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (result) => {
        setQrData(result);
        scanner.clear();
      },
      (error) => {
        console.error(error);
      }
    );

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>QR Code Scanner</Heading>
        <Box width="100%" maxW="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <div id="reader" style={{ width: "100%" }}></div>
        </Box>
        <Box mt={4} p={4} borderWidth="1px" borderRadius="lg" width="100%" maxW="500px">
          <Text fontSize="lg">Scanned QR Code Content:</Text>
          <Text mt={2} fontSize="md" color="gray.600">{qrData}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;