"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useT } from "@/i18n/useT";
import { useParams } from "next/navigation";

export default function PostsPage() {
  const [date, setDate] = useState("");
  const { lang } = useParams();
  const { t } = useT("common");

  useEffect(() => {
    setDate(new Date().toISOString());
  }, []);

  return (
    <div>
      <h1>{t("posts_title")}</h1>
      <span>{date}</span>
      <br />
      <Link href={`/${lang}/posts/create`}>{t("create_post")}</Link>
    </div>
  );
}