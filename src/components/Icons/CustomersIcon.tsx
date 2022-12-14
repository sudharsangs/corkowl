import { IconProps } from "./DashboardIcon";

export const CustomersIcon = ({ color }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0909 19.7273V18.0909C16.0909 17.2229 15.7461 16.3905 15.1323 15.7767C14.5186 15.163 13.6862 14.8182 12.8182 14.8182H6.27273C5.40475 14.8182 4.57232 15.163 3.95856 15.7767C3.3448 16.3905 3 17.2229 3 18.0909V19.7273"
        stroke={color || "#485572"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.54543 11.5455C11.3529 11.5455 12.8182 10.0802 12.8182 8.27273C12.8182 6.46525 11.3529 5 9.54543 5C7.73795 5 6.27271 6.46525 6.27271 8.27273C6.27271 10.0802 7.73795 11.5455 9.54543 11.5455Z"
        stroke={color || "#485572"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 19.7273V18.0909C20.9995 17.3658 20.7581 16.6614 20.3139 16.0883C19.8696 15.5152 19.2476 15.1058 18.5455 14.9246"
        stroke={color || "#485572"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2727 5.10638C15.9767 5.28663 16.6006 5.69605 17.0462 6.27009C17.4918 6.84414 17.7337 7.55015 17.7337 8.27684C17.7337 9.00352 17.4918 9.70954 17.0462 10.2836C16.6006 10.8576 15.9767 11.267 15.2727 11.4473"
        stroke={color || "#485572"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
