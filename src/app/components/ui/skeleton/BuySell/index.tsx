import { Skeleton } from "@/app/components/ui/shadcn/skeleton";

const BuySellSkeleton = () => {
  return (
    <>
      <Skeleton
        style={{ height: "356px", width: "100%", border: "none" }}
      ></Skeleton>{" "}
    </>
  );
};

export default BuySellSkeleton;
