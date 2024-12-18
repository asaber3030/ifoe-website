type Props = {
  label: string
  description: string
  progress: number
  size?: number
  strokeWidth?: number
}

export const StatsItem = ({ label, description, progress, size = 100, strokeWidth = 8 }: Props) => {
  const radius = (size - 8) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm">
      <div>
        <p className="font-bold">{label}</p>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex items-center justify-center">
        <svg width={size} height={size} className="transform rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className="stroke-gray-300"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className="stroke-green-700"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute text-center font-bold" style={{ fontSize: size * 0.2 }}>
          {progress}%
        </div>
      </div>
    </div>
  )
}
