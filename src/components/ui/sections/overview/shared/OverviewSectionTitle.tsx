import { Flex, Image, Text } from "@chakra-ui/react";
import caretRight from "@/assets/images/icon-caret-right.svg";
import { Link } from "react-router-dom";

type Props = {
  title: string;
};

const OverviewSectionTitle = (props: Props) => {
  const { title } = props;
  return (
    <Link to={`/${title.toLowerCase().split(" ").join("-")}`}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text textStyle={"text2"} color={"grey.900"}>
          {title}
        </Text>
        <Flex gap={150} alignItems={"center"}>
          <Text textStyle={"text4"} color={"grey.500"}>
            {title === "Transactions" ? "View All" : "See details"}
          </Text>
          <Image src={caretRight} />
        </Flex>
      </Flex>
    </Link>
  );
};

export default OverviewSectionTitle;
