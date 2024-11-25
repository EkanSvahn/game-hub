import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children) {
    return null;
  }

  return (
    <>
      <Text noOfLines={isExpanded ? undefined : 3}>{children}</Text>
      <Button
        onClick={() => setIsExpanded((prev) => !prev)}
        mt={2}
        size="sm"
        colorScheme="pink"
        fontWeight="bold"
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </>
  );
};

export default ExpandableText;
