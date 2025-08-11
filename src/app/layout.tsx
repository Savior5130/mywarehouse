// app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventory Dashboard",
  description: "Inventory management and analytics system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
            <h1 className="text-xl font-bold mb-6">Inventory</h1>
            <nav className="flex flex-col gap-4">
              <a href="/dashboard" className="hover:text-blue-600">
                Dashboard
              </a>
              <a href="/inventory" className="hover:text-blue-600">
                Inventory
              </a>
              <a href="/transactions" className="hover:text-blue-600">
                Transactions
              </a>
              <a href="/analytics" className="hover:text-blue-600">
                Analytics
              </a>
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
