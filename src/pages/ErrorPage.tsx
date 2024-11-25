import { Flex, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Flex align="center" justify="center" height="100vh" direction="column">
        <Heading>Ooops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "404 This page does not exists"
            : "Unexpected error"}
        </Text>
      </Flex>
    </>
  );
};

export default ErrorPage;
