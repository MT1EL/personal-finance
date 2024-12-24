import { IconState } from "@/types/general";

export const getIconColor = (type: IconState) => {
  const colorMap = {
    active: "green",
    hover: "#F2F2F2",
    default: "#b3b3b3",
  };

  return colorMap[type] || colorMap.default;
};
