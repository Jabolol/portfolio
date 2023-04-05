import { Head } from "$fresh/runtime.ts";
import Navbar from "../islands/Navbar.tsx";
import Hero from "../islands/Hero.tsx";
import About from "../islands/About.tsx";
import Projects from "../islands/Projects.tsx";
import Contact from "../islands/Contact.tsx";
import Footer from "../islands/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Javier R.</title>
      </Head>
      <main class="bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
