import { LocaleTypes } from "@/i18n/locales/settings";


type PageProps = {
  params: Promise<{ locale: LocaleTypes }>
}

export default function Page(props: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <p className="text-lg">Welcome to Beestro Bled!</p>
    </div>
  );
}
