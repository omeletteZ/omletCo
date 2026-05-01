import { Suspense } from "react";
import { getT } from "@/i18n/getT";

async function CommentsContent({ id, lang }: { id: string; lang: string }) {
  const { t } = await getT("common", lang);
  return (
    <main>
      <h1>{t("comments_title")}</h1>
      <p>{t("comments_desc", { id })}</p>
      <a href={`/${lang}/products/${id}`}>{t("back_to_product")}</a>
    </main>
  );
}

export default async function CommentsPage({
  params,
}: {
  params: Promise<{ id: string; lang: string }>;
}) {
  const { id, lang } = await params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CommentsContent id={id} lang={lang} />
    </Suspense>
  );
}