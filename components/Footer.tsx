export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
        © {year} With ❤️ from Kashif
      </div>
    </footer>
  );
}
