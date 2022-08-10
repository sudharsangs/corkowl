export const Dropdown = ({ invert }: { invert: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: invert ? "matrix(1, 0, 0, -1, 0, 0)" : "",
      }}
    >
      <path
        d="M5 8L10 13L15 8"
        stroke="#485572"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
