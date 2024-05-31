import { Container, Box, Text, VStack, HStack, Link, Flex, Spacer, Heading, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="green.400" minH="100vh" display="flex" flexDirection="column">
      <Container maxW="container.lg" bg="white" p={8} mt={8} borderRadius="md" boxShadow="lg">
        <Flex as="header" w="full" mb={8} alignItems="center">
          <Heading as="h1" size="lg">
            Vela
          </Heading>
          <Spacer />
          <HStack spacing={8}>
            <Link href="#about" fontWeight="bold">
              About
            </Link>
            <Link href="#blog" fontWeight="bold">
              Blog
            </Link>
            <Link href="#our-companies" fontWeight="bold">
              Our Companies
            </Link>
          </HStack>
        </Flex>
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="2xl">
            Pushing the boundaries of Finance and AI.
          </Heading>
        </VStack>
      </Container>
      <Spacer />
      <Container as="footer" maxW="container.lg" bg="white" p={4} mt={8} borderRadius="md" boxShadow="lg">
        <Flex w="full" alignItems="center">
          <HStack spacing={8}>
            <Link href="#terms" fontWeight="bold">
              Terms and Conditions
            </Link>
            <Link href="#privacy" fontWeight="bold">
              Privacy Policy
            </Link>
          </HStack>
          <Spacer />
          <HStack spacing={4}>
            <IconButton as={Link} href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton as={Link} href="https://telegram.org" aria-label="Telegram" icon={<FaTelegram />} size="lg" />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
