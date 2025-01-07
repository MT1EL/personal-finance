import {
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";
import Input from "../Input";

import image from "@/assets/images/avatars/aqua-flow-utilities.jpg";
import billPaid from "@/assets/images/icon-bill-paid.svg";
import billDue from "@/assets/images/icon-bill-due.svg";

const BillsTable = () => {
  const data = [
    {
      title: "Electricity Bill",
      dueDate: "2025-01-15",
      amount: "$100",
      status: "paid",
    },
    {
      title: "Internet Bill",
      dueDate: "2025-01-20",
      amount: "$50",
      status: "paid",
    },
    {
      title: "Water Bill",
      dueDate: "2025-01-25",
      amount: "$30",
      status: "due",
    },
    {
      title: "Gas Bill",
      dueDate: "2025-01-30",
      amount: "$20",
      status: "on going",
    },
  ];
  return (
    <VStack
      w="100%"
      gap={300}
      px={[250, 400]}
      py={[300, 400]}
      borderRadius={"12px"}
      bg="White"
    >
      <Input placeholder="Search Bills" rightIcon />
      <TableContainer w="100%">
        <Table w="100%">
          <Thead display={["none", "table-header-group"]}>
            <Tr>
              <Th w="55%">Bill Title</Th>
              <Th w="20%">Due Date</Th>
              <Th w="16%" isNumeric>
                Amount
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((bill, index) => (
              <Box key={index} display={["block", "contents"]}>
                <Tr
                  display={["flex", "table-row"]}
                  flexDirection={["column", "unset"]}
                  gap={["8px", "0"]}
                  alignItems={"center"}
                  pt={[index !== 0 ? "20px" : "unset", "unset"]}
                  pb={[index !== data.length - 1 ? "20px" : "unset", "unset"]}
                >
                  <Tr display={["table-row", "contents"]} w="100%">
                    <Td display={["contents", "table-cell"]}>
                      {
                        <Box display="flex" alignItems="center" px="0">
                          <Image
                            src={image}
                            alt={"dsa"}
                            boxSize="32px"
                            marginRight="10px"
                            borderRadius={"50%"}
                          />
                          <Text fontWeight="bold">{bill.title}</Text>
                        </Box>
                      }
                    </Td>
                  </Tr>
                  <Tr display={["table-row", "contents"]} w="100%">
                    <Td display={["contents", "table-cell"]} w="100%">
                      <Flex
                        display={["flex", "contents"]}
                        justifyContent={"space-between"}
                        w={"100%"}
                      >
                        <Flex gap="8px" h="100%">
                          <Text
                            textStyle={"text5"}
                            color={
                              bill.status === "paid" ? "green" : "grey.500"
                            }
                          >
                            {bill.dueDate}
                          </Text>
                          {bill.status !== "on going" && (
                            <Image
                              src={bill.status === "paid" ? billPaid : billDue}
                              alt="bill due"
                            />
                          )}
                        </Flex>
                        <Text
                          display={["block", "none"]}
                          textStyle={"text4Bold"}
                          color={
                            bill.status === "paid" ? "grey.900" : "red.500"
                          }
                        >
                          {bill.amount}
                        </Text>
                      </Flex>
                    </Td>
                  </Tr>
                  <Td isNumeric display={["none", "block"]}>
                    <Text
                      textStyle={"text4Bold"}
                      color={bill.status === "paid" ? "grey.900" : "red.500"}
                    >
                      {bill.amount}
                    </Text>
                  </Td>
                </Tr>
                {index !== data.length - 1 && <Divider />}
              </Box>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default BillsTable;
