import { LANGUAGES } from "@/i18n/settings";

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return <>{children}</>;
}