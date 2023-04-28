import DenoIcon from "$icons/brand-deno.tsx";

export default function Footer() {
  return (
    <footer class="flex flex-col justify-center items-center py-6 text-gray-600 dark:text-gray-400">
      <div class="flex flex-row items-center space-x-2 mb-4">
        <DenoIcon class="w-6 h-6" />
        <p class="text-sm font-medium">
          Powered by <a href="https://fresh.deno.dev/">Deno</a>
        </p>
      </div>
      <div class="flex flex-row items-center space-x-4">
        <p class="text-sm font-medium">
          &copy; Javier R. 2023 - present
        </p>
      </div>
    </footer>
  );
}
