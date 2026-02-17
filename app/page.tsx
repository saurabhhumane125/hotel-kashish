import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center bg-charcoal">
          <div className="container-custom text-center">
            <SectionLabel dark className="mb-4 block">
              Hotel Kashish International
            </SectionLabel>
            <h1
              className="text-hero text-ivory mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Where Every Occasion
              <br />
              Finds Its Place
            </h1>
            <p className="text-body text-ivory/60 max-w-[720px] mx-auto mb-10">
              Kalyan East&apos;s premier destination for celebrations, dining,
              and stays
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="#celebrate">
                Plan Your Event
              </Button>
              <Button variant="outline" size="lg" href="#stay">
                Explore
              </Button>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="bg-ivory section-padding">
          <div className="container-custom text-center">
            <SectionLabel className="mb-4 block">Our Legacy</SectionLabel>
            <SectionHeading>
              Kalyan&apos;s Most Trusted Hospitality Address
            </SectionHeading>
            <p className="text-body text-charcoal/60 max-w-[720px] mx-auto mt-6">
              Hotel Kashish International has been Kalyan East&apos;s address
              for life&apos;s most important moments — from grand weddings to
              intimate celebrations, from business conferences to nights out
              with friends.
            </p>
          </div>
        </section>

        {/* CELEBRATE */}
        <section id="celebrate" className="bg-charcoal section-padding">
          <div className="container-custom text-center">
            <SectionLabel dark className="mb-4 block">
              Celebrations
            </SectionLabel>
            <SectionHeading dark>
              Spaces That Rise to the Occasion
            </SectionHeading>
            <p className="text-body text-ivory/60 max-w-[720px] mx-auto mt-6">
              Three distinctive halls, each designed for a different scale of
              celebration. From intimate gatherings of 50 to grand events of
              1000.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {["Golden Eye", "Ruby Red", "Blue Moon"].map((hall) => (
                <div
                  key={hall}
                  className="border border-white/10 bg-charcoal-light p-8 text-left"
                >
                  <h3
                    className="text-xl text-ivory mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {hall}
                  </h3>
                  <p className="text-sm text-ivory/40">
                    Full details coming in Sprint 2
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAY */}
        <section id="stay" className="bg-ivory section-padding">
          <div className="container-custom text-center">
            <SectionLabel className="mb-4 block">Stay</SectionLabel>
            <SectionHeading>Rest, Recharge, Return</SectionHeading>
            <p className="text-body text-charcoal/60 max-w-[720px] mx-auto mt-6">
              Room details coming in Sprint 2
            </p>
          </div>
        </section>

        {/* DINE */}
        <section id="dine" className="bg-stone section-padding">
          <div className="container-custom text-center">
            <SectionLabel className="mb-4 block">Experience</SectionLabel>
            <SectionHeading>Dine. Drink. Cheer.</SectionHeading>
            <p className="text-body text-charcoal/60 max-w-[720px] mx-auto mt-6">
              Dining details coming in Sprint 3
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-ivory section-padding">
          <div className="container-custom text-center">
            <SectionLabel className="mb-4 block">Connect</SectionLabel>
            <SectionHeading>Let&apos;s Plan Together</SectionHeading>
            <p className="text-body text-charcoal/60 max-w-[720px] mx-auto mt-6">
              Contact form coming in Sprint 3
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
