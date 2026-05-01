import { getT } from "@/i18n/getT";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { t } = await getT("common", lang);

  return (
    <div>
      <h1>{t("welcome")}</h1>
    </div>
  );
}