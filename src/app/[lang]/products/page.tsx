import { Suspense } from "react";
import { getT } from "@/i18n/getT";

async function ProductContent({ id, lang }: { id: string; lang: string }) {
  const { t } = await getT("common", lang);
  return (
    <main>
      <h1>{t("product_page")}</h1>
      <p>{t("product_id", { id })}</p>
      <a href={`/${lang}/products/${id}/comments`}>{t("to_comments")}</a>
    </main>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string; lang: string }>;
}) {
  const { id, lang } = await params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductContent id={id} lang={lang} />
    </Suspense>
  );
}