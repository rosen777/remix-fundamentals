import { Link, useLoaderData } from "@remix-run/react";

export default function PostAdmin() {
  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create a New Post
      </Link>
    </p>
  );
}
