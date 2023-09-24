import { Head } from "$fresh/runtime.ts";
import Navbar from "~/islands/Navbar.tsx";
import Hero from "~/islands/Hero.tsx";
import About from "~/components/About.tsx";
import Projects from "~/components/Projects.tsx";
import Awards from "~/components/Awards.tsx";
import Contact from "~/components/Contact.tsx";
import Footer from "~/components/Footer.tsx";
import Contributions from "~/islands/Contributions.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Javier R.</title>
      </Head>
      <main class="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Awards />
        <Contributions />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
