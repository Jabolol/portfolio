import { Head } from "$fresh/runtime.ts";
import Navbar from "~/islands/Navbar.tsx";
import Hero from "~/islands/Hero.tsx";
import Footer from "~/components/Footer.tsx";
import Contributions from "~/islands/Contributions.tsx";
import Section from "~/components/Section.tsx";
import { about, awards, contact, projects } from "~/misc.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Javier R.</title>
      </Head>
      <main class="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
        <Navbar />
        <Hero />
        <Section
          id="about"
          title="About me"
          description="Get to know me a little better."
          items={about}
        />
        <Section
          id="projects"
          title="Projects"
          description="Some of my latest projects."
          items={projects}
        />
        <Section
          id="awards"
          title="Awards"
          description="Some of my hackathon feats."
          items={awards}
        />
        <Contributions />
        <Section
          id="contact"
          title="Contact"
          description="How about we get in touch?"
          items={contact}
        />
        <Footer />
      </main>
    </>
  );
}
