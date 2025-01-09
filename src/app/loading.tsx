import { Card } from "@/components/ui/card";

const Loading = () => {
  return (
    <div className="container mx-auto p-4 space-y-4">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>

      {/* Content Skeleton */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Generate 6 card skeletons */}
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="p-4">
            <div className="space-y-3">
              <Skeleton className="h-[125px] w-full rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Footer Skeleton */}
      <div className="flex justify-between items-center mt-8">
        <Skeleton className="h-10 w-[100px]" />
        <div className="flex space-x-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
