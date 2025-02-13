import { Code2 } from "lucide-react";

export default function UnderDevelopment() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4'>
      <div className='text-center space-y-6'>
        <h1 className='text-4xl font-bold text-gray-800'>Under Development</h1>
        <p className='text-xl text-gray-600 max-w-md mx-auto'>
          We're crafting something amazing. Our website will be ready soon!
        </p>
        <div className='text-sm text-gray-500'>2025 - IFOE</div>
      </div>
    </div>
  );
}
