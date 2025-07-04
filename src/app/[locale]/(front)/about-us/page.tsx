import { LocaleTypes } from "@/i18n/locales/settings";

type PageProps = {
  params: Promise<{ locale: LocaleTypes }>
}

export default async function Page(props: PageProps) {
  const { locale } = await props.params;
  console.log(locale);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-lg">This page is under construction.</p>
    </div>
  );
}
