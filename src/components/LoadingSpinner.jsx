export function LoadingSpinner({ isLoading }) {
  return (
    <div
      className={`${
        isLoading ? "backdrop-blur-sm" : "hidden"
      } h-full w-full backdrop-blur-sm absolute bottom-0 right-0 z-10`}
    >
      <span
        className={`${
          isLoading ? "block" : "hidden"
        } loading loading-spinner loading-lg text-primary fixed translate-y-1/2 translate-x-1/2 bottom-1/2 right-1/2`}
      />
    </div>
  );
}
