export const Loader = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500"></div>

        <p className="animate-pulse text-gray-400">Loading...</p>
      </div>
    </div>
  );
};
