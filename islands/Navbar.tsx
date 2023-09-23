import { FaMoon, FaSun } from "~/components/Icons.tsx";
import { useSignal } from "@preact/signals";
import useDarkMode from "~/hooks/darkMode.ts";

export default function NavBar() {
  const open = useSignal(false);
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <nav class="fixed bg-white bg-opacity-60 dark:bg-gray-900 dark:bg-opacity-60 shadow-md fixed w-full top-0 left-0 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center gap-1 m-2 p-2 rounded-lg">
              <a href="/" class="font-bold text-lg dark:text-white">
                Javier R.
              </a>
            </div>

            <div class="hidden sm:flex sm:items-center sm:ml-6">
              <a
                href="#about"
                class="px-3 py-2 rounded-md text-sm font-medium text-black dark:text-white"
              >
                About
              </a>
              <a
                href="#projects"
                class="px-3 py-2 rounded-md text-sm font-medium text-black dark:text-white"
              >
                Projects
              </a>
              <a
                href="#awards"
                class="px-3 py-2 rounded-md text-sm font-medium text-black dark:text-white"
              >
                Awards
              </a>
              <a
                href="#contact"
                class="px-3 py-2 rounded-md text-sm font-medium text-black dark:text-white"
              >
                Contact
              </a>
              <a
                href="https://javi-blog.deno.dev/"
                target="_blank"
                rel="noopener noreferrer"
                class="px-3 py-2 rounded-md text-sm font-medium text-black dark:text-white"
              >
                Blog
              </a>
            </div>
          </div>

          <div class="flex items-center -mr-2 gap-4">
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white focus:outline-none"
              onClick={toggle}
            >
              {isDarkMode.value ? <FaMoon /> : <FaSun />}
            </button>
            <button
              class="flex sm:hidden inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white focus:outline-none"
              aria-label="Main menu"
              aria-expanded={open.value ? "true" : "false"}
              onClick={() => open.value = !open.value}
            >
              {open.value
                ? (
                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )
                : (
                  <svg
                    class="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
            </button>
          </div>
        </div>
      </div>
      <div class={open.value ? "" : "hidden sm:hidden"}>
        <div class="pt-2 pb-1 space-y-1">
          <a
            href="#about"
            class="block px-8 py-2 rounded-md text-base font-medium text-black dark:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            class="block px-8 py-2 rounded-md text-base font-medium text-black dark:text-white"
          >
            Projects
          </a>
          <a
            href="#awards"
            class="block px-8 py-2 rounded-md text-base font-medium text-black dark:text-white"
          >
            Awards
          </a>
          <a
            href="#contact"
            class="block px-8 py-2 rounded-md text-base font-medium text-black dark:text-white"
          >
            Contact
          </a>
          <a
            href="https://javi-blog.deno.dev/"
            target="_blank"
            rel="noopener noreferrer"
            class="block px-8 py-2 rounded-md text-base font-medium text-black dark:text-white"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}
