"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toISOString());
  }, []);

  return (
    <div>
      <h1>Посты</h1>
      <span>{date}</span>
      <br />
      <Link href="/posts/create">Create Post</Link>
    </div>
  );
}