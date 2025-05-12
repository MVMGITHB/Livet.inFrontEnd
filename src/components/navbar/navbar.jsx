import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
            Livet.in
          </Link>

          {/* Powered by Section */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Powered by</span>
            {/* Add logo when needed */}
            {/* <img src="/logo-crif.png" alt="CRIF" className="h-5 w-auto" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
