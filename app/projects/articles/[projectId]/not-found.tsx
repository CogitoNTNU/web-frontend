import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-2xl text-white w-screen h-screen justify-center items-center flex flex-col space-y-2">
      <p>404 - Article Not Found</p>
      <p className="text-lg">Did you write the url correctly?</p>
      <Link
        href="/projects"
        className="mt-4 bg-blue-default hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Back to Projects
      </Link>
    </div>
  );
}
