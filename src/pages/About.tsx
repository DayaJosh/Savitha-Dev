import { Link } from "react-router-dom";
import aboutImage from "@/assets/savitha-about.jpg";
import ScrollSection from "@/components/ScrollSection";

const About = () => (
  <main className="pt-20">
    <section className="py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollSection>
          <img
            src={aboutImage}
            alt="Savitha Rameshkumar"
            loading="lazy"
            width={800}
            height={1000}
            className="w-full max-w-lg mx-auto lg:mx-0 object-cover"
          />
        </ScrollSection>
        <ScrollSection delay={0.15}>
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">About Me</p>
            <h1 className="text-4xl md:text-5xl leading-tight mb-8">
              Dedicated to Your<br />Real Estate Success
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over five years of experience navigating the Dallas-Fort Worth real estate market, I bring a deep
                understanding of local neighborhoods, market trends, and what it takes to achieve the best outcome for my
                clients.
              </p>
              <p>
                As a licensed realtor with LM Max Realty and a mortgage broker for Bestow Mortgage LLC, I offer a
                comprehensive approach to home buying and selling. This dual expertise allows me to guide clients through
                both the real estate and financing sides of the process, ensuring a seamless experience from start to finish.
              </p>
              <p>
                I've helped dozens of families buy, sell, and invest in properties across the DFW metroplex — from
                first-time buyers in Frisco to luxury homeowners in Preston Hollow.
              </p>
              <p>
                My approach is simple: listen carefully, communicate transparently, and work tirelessly to exceed
                expectations. Real estate is one of the biggest decisions of your life, and I'm honored to guide you
                through it with professionalism and heart.
              </p>
              <p>
                When I'm not helping clients, you'll find me exploring new neighborhoods, staying on top of market data,
                and building meaningful relationships in the communities I serve.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-8 px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
            >
              Contact Me
            </Link>
          </div>
        </ScrollSection>
      </div>
    </section>
  </main>
);

export default About;
