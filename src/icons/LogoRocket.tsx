interface LogoRocketProps {
  width?: number;
  height?: number;
}

export default function LogoRocket({
  width = 32,
  height = 32,
}: LogoRocketProps) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 500.000000 500.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      ></g>
    </svg>
  );
}
