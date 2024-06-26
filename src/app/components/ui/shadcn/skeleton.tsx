import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: number;
  width?: string;
}

function Skeleton({
  className,
  height = 20, // Default height value
  width = '100%', // Default width value
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      style={{ height, width }}
      {...props}
    />
  )
}

export { Skeleton }
