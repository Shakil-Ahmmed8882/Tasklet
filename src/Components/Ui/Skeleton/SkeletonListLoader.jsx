
import {Skeleton} from "@nextui-org/react";

export default function SkeletonListLoader() {
  return (
    <div className=" justify-center w-full my-3  flex items-center gap-3">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12"/>
      </div>  
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg"/>
        <Skeleton className="h-3 w-4/5 rounded-lg"/>
      </div>
    </div>
  );
}
