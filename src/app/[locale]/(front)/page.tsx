import { LocaleTypes } from "@/i18n/locales/settings";
import Section from "@/app/components/layout/section";
import Container from "@/app/components/layout/container";
import { HorizontalCarousel } from "@/app/components/horizontal-carousel";
import BlurText from "@/app/components/animations/text-blur";
import Image from "next/image";
import Block from "@/app/components/layout/block";
import { H1, P } from "@/app/components/typhography";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import Nav from "@/app/components/ui/nav";

type PageProps = {
  params: Promise<{ locale: LocaleTypes }>;
};

export default async function Page(props: PageProps) {
  const { locale } = await props.params;
  console.log(locale);

  return (
    <div className="relative">
      <Nav />
      {/* Section 1 */}
      <Section bg="rolex-green" className="pb-8 pt-0">
        <Container>
          <div className="flex flex-col gap-4 w-full">
            <H1>WEBPAGE TITLE</H1>
          </div>
          <P>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </P>
          <HorizontalCarousel id="hero-images" useSnap autoplay>
            <div className="relative h-[calc(100dvh-600px)]">
              <Image
                src="/img/watch2.jpg"
                alt="Watch image"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[calc(100dvh-600px)]">
              <Image
                src="/img/watch1.jpg"
                alt="Watch image"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[calc(100dvh-600px)]">
              <Image
                src="/img/watch3.jpg"
                alt="Watch image"
                fill
                className="object-contain"
              />
            </div>
          </HorizontalCarousel>
        </Container>
      </Section>

      {/* Section 2 */}
      <Section bg="rolex-white" className="py-8">
        <Container className="items-end justify-start">
          <BlurText
            text="Lorem ipsum dolor sit amet consectetur adipiscing elit."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[27px] font-heading lg:text-[40px] text-[#695547] text-rolex-black"
          />
          <Block
            animation="fadeInRight"
            className="flex w-full lg:w-1/3 items-end justify-start pt-10 lg:pt-0"
          >
            <Link href={`/${locale}/about-us`}>
              <Button variant="rolexGreen" size="lg">
                VEČ O NAS
              </Button>
            </Link>
          </Block>
        </Container>

        <Container className="py-10 lg:pt-30">
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            <Block
              animation="fadeInLeft"
              className="relative w-full max-w-[400px] lg:max-w-none mx-auto aspect-[9/12] lg:w-1/2"
            >
              <Image
                src="/img/watch4.jpg"
                alt="Hero"
                className="object-cover rounded-[15px]"
                fill
              />
            </Block>
            <div className="flex flex-col-reverse lg:flex-col gap-4 lg:pl-25 lg:w-1/2 justify-between">
              <Block
                animation="fadeInRight"
                delay={0.5}
                className="relative w-full max-w-[400px] lg:max-w-none mx-auto aspect-square "
              >
                <Image
                  src="/img/watch5.jpg"
                  alt="Hero"
                  className="object-cover rounded-[15px]"
                  fill
                />
              </Block>
              <div className="space-y-4 pb-10 lg:pb-0">
                <Block animation="fadeInUp" delay={0.2}>
                  <P>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.
                  </P>
                </Block>
                <Block animation="fadeInUp" delay={0.3}>
                  <P>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos.
                  </P>
                </Block>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
