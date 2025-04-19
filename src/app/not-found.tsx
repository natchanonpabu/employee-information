import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-neutral-500">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/user" className="mt-4 text-blue-500">
        กลับหน้าหลัก
      </Link>
    </div>
  );
};

export default NotFound;
