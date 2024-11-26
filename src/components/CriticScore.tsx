import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
  fontSize?: string;
}
const CriticScore = ({ score, fontSize }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={fontSize}
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
