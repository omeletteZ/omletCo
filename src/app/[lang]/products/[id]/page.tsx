import { Suspense } from "react";
import { getT } from "@/i18n/getT";
import { Trans } from "react-i18next/TransWithoutContext";

async function ProductsContent({ lang }: { lang: string }) {
  const { t } = await getT("common", lang);
  const products = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  return (
    <main>
      {/* Trans — пункт 3 */}
      <h1>
        <Trans
          i18nKey="greeting"
          t={t}
          components={{ bold: <strong /> }}
        />
      </h1>

      {/* Pluralization — пункт 4 */}
      <p>{t("items", { count: products.length })}</p>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {/* Интерполяция — пункт 2 */}
            <a href={`/${lang}/products/${product.id}`}>
              {t("product_name", { number: product.id })}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent lang={lang} />
    </Suspense>
  );
}