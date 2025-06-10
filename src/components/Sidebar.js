'use client';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg h-screen p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Tender Consultant</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-100">Dashboard</Link>
        <Link href="/dashboard/tenders" className="block p-2 rounded hover:bg-gray-100">Tenders</Link>
        <Link href="/login" className="block p-2 rounded hover:bg-gray-100">Logout</Link>
      </nav>
    </div>
  );
}
