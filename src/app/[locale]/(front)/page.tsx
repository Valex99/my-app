import { LocaleTypes } from "@/i18n/locales/settings";
import Section from "@/app/components/layout/section";
import Container from "@/app/components/layout/container";

type PageProps = {
  params: Promise<{ locale: LocaleTypes }>;
};

export default async function Page(props: PageProps) {
  const { locale } = await props.params;
  console.log(locale);

  return (
    <div>
      <Section bg="rolex-gold" className="h-[calc(100vh-70px)]">
        <Container>
          <h1>HOMEPAGE</h1>
        </Container>
      </Section>
    </div>
  );
}
