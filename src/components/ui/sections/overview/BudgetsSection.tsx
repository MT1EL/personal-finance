import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";

import { ResponsivePie } from "@nivo/pie";
import PotTag from "../../tags/PotTag";
import { useState } from "react";
import OverviewSectionLayout from "../../../layouts/OverviewSectionLayout";

const BudgetsSection = ({
  tagsType,
  hasTitle,
}: {
  tagsType: "vertical" | "horizontal";
  hasTitle?: boolean;
}) => {
  const [hoveredLegend, setHoveredLegend] = useState<string | null>(null);

  const data = [
    { id: "Entertainment", value: 50, color: "#277C78" },
    { id: "Bills", value: 750, color: "#82C9D7" },
    { id: "Dining Out", value: 75, color: "#F2CDAC" },
    { id: "Personal Care", value: 100, color: "#626070" },
  ];
  return (
    <OverviewSectionLayout title={"Budgets"} hasTitle={hasTitle}>
      <Flex gap={200} my="auto" flexDirection={["column", "column"]}>
        {/* Pie Chart */}
        <Box
          w={["100%", "100%", "250px"]}
          h={"250px"}
          position={"relative"}
          mx="auto"
        >
          <Box
            w={"80%"}
            aspectRatio={1}
            borderRadius={"100%"}
            bg="white"
            opacity={"0.25"}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            zIndex={10}
          />
          <ResponsivePie
            data={data}
            innerRadius={0.7} // Creates the donut hole
            colors={{ datum: "data.color" }} // Custom segment colors
            enableArcLabels={true} // Disable labels on arcs
            enableArcLinkLabels={true} // Disable links
            isInteractive={this} // Disable hover effects
            defs={[
              {
                id: "highlight",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.5)",
                size: 4,
                padding: 1,
                stagger: true,
                innerRadius: 0,
              },
            ]}
            fill={data.map((item) => ({
              match: { id: item.id },
              id: hoveredLegend === item.id ? "highlight" : "",
            }))}
            arcLinkLabelsSkipAngle={10}
            layers={[
              "arcs",
              "legends",
              // Custom center content
              ({ centerX, centerY }) => (
                <text
                  x={centerX}
                  y={centerY}
                  textAnchor="middle"
                  dominantBaseline="central"
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  $338
                  <tspan
                    x={centerX}
                    dy={20}
                    fontSize="12px"
                    fill="#888"
                    fontWeight="normal"
                  >
                    of $975 limit
                  </tspan>
                </text>
              ),
            ]}
          />
        </Box>
        {/* Pots */}
        <VStack
          gap={200}
          alignItems={"flex-start"}
          display={[tagsType === "horizontal" ? "flex" : "grid", "flex"]}
          gridTemplateColumns={["1fr 1fr"]}
        >
          <Text textStyle={"text2"}> Spending Summary</Text>
          {data.map((pot) => (
            <>
              <Box
                onMouseEnter={() => setHoveredLegend(pot.id)}
                onMouseLeave={() => setHoveredLegend(null)}
                key={pot.id}
                w="100%"
              >
                <PotTag
                  color={pot.color}
                  name={pot.id}
                  amount={pot.value}
                  target={50}
                />
              </Box>
              <Divider display={tagsType === "horizontal" ? "none" : "block"} />
            </>
          ))}
        </VStack>
      </Flex>
    </OverviewSectionLayout>
  );
};

export default BudgetsSection;
