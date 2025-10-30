import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-darker text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-8">Siden ble ikke funnet</h2>
      <Link
        href="/"
        className="bg-blue-default hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Gå til forsiden
      </Link>
    </div>
  );
}
