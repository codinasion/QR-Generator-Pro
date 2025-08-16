import { getDictionary, langListData, langType } from "@/dictionaries";

export async function generateStaticParams() {
  return langListData.map((lang) => ({
    lang: lang,
  }));
}

export default async function Page({ params }: { params: Promise<langType> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <>Hello World!!!</>;
}
