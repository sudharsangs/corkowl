import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { tokens } from "../../styleConfig";
import { GraphToolTip } from "./GraphComponent.style";

const data = [
  {
    name: "MON",
    amount: 2400,
  },
  {
    name: "TUE",
    amount: 1398,
  },
  {
    name: "WED",
    amount: 9800,
  },
  {
    name: "THU",
    amount: 3908,
  },
  {
    name: "FRI",
    amount: 4800,
  },
  {
    name: "SAT",
    amount: 3800,
  },
  {
    name: "SUN",
    amount: 4300,
  },
];

export const GraphComponent = () => {
  const customTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<ValueType, NameType>) => {
    if (active) {
      const res = payload?.[0].payload;
      return <GraphToolTip>${res?.amount}</GraphToolTip>;
    }

    return null;
  };
  return (
    <div
      style={{
        width: 700,
        height: 300,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 2 1" />
          <XAxis dataKey="name" />
          <Tooltip content={customTooltip} />
          <YAxis />
          <Line
            type="linear"
            dataKey="amount"
            stroke={tokens.color.successText}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
