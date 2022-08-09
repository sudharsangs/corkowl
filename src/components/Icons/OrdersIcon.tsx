import { IconProps } from "./DashboardIcon";

export const OrdersIcon = ({color}:IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.7 3L4 6.6V19.2C4 19.6774 4.18964 20.1352 4.52721 20.4728C4.86477 20.8104 5.32261 21 5.8 21H18.4C18.8774 21 19.3352 20.8104 19.6728 20.4728C20.0104 20.1352 20.2 19.6774 20.2 19.2V6.6L17.5 3H6.7Z"
        stroke={color || "#485572"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 6.59998H20.2"
        stroke={color || "#485572"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7 10.2C15.7 11.1548 15.3207 12.0705 14.6456 12.7456C13.9705 13.4207 13.0548 13.8 12.1 13.8C11.1452 13.8 10.2295 13.4207 9.55442 12.7456C8.87928 12.0705 8.5 11.1548 8.5 10.2"
        stroke={color || "#485572"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
