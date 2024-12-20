import { Box, Heading, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="xl" color="gray.600">
        {term}
      </Heading>
      <Text fontSize="xl">{children}</Text>
    </Box>
  );
};

export default DefinitionItem;
