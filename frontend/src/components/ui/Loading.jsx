import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center min-h-screen bg-white/80 backdrop-blur-sm">
      <div className="relative">
        {/* Modern spinner with gradient */}
        <div className="w-16 h-16 rounded-full border-[3px] border-black/10 border-l-black animate-spin"></div>
        
        {/* Loading text */}
        <p className="mt-4 text-sm font-medium text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
