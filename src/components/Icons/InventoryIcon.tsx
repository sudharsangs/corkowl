import { IconProps } from "./DashboardIcon";

export const InventoryIcon = ({ color }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3L3 7.5L12 12L21 7.5L12 3Z"
        stroke={color || "#485572"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16.5L12 21L21 16.5"
        stroke={color || "#485572"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12L12 16.5L21 12"
        stroke={color || "#485572"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
