import { Box, Flex, Image, Text } from "@chakra-ui/react";
import editIcon from "@/assets/images/icon-ellipsis.svg";

type Props = {
  title: string;
  color: string;
};

const CardsTitle = ({ title, color }: Props) => {
  return (
    <Flex justifyContent="space-between" w="100%" alignItems={"center"}>
      <Flex gap={200} alignItems={"center"}>
        <Box w={"16px"} h="16px" borderRadius={"50%"} bgColor={color} />
        <Text textStyle={"text2"} color={"grey.900"}>
          {title}
        </Text>
      </Flex>
      <Image src={editIcon} alt="edit" />
    </Flex>
  );
};

export default CardsTitle;
