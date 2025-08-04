import { css } from "../../../styled-system/css";
import { badgeStyles } from "../../styles/badge";

export const getRiskStyles = (risk: RiskType) => {
    switch (risk) {
        case "Critical":
            return `${badgeStyles.base} ${badgeStyles.critical}`;
        case "High":
            return `${badgeStyles.base} ${badgeStyles.high}`;
        case "Medium":
            return `${badgeStyles.base} ${badgeStyles.medium}`;
        case "Low":
            return `${badgeStyles.base} ${badgeStyles.low}`;
        default:
            return `${badgeStyles.base} ${badgeStyles.default}`;
    }
};

export const getDotColor = (level: string) => {
    switch (level) {
      case "Critical":
        return css({ bg: 'red.500' });
      case "High":
        return css({ bg: 'orange.500' });
      case "Medium":
        return css({ bg: 'yellow.500' });
      case "Low":
        return css({ bg: 'green.500' });
      default:
        return css({ bg: 'gray.500' });
    }
  };