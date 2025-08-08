export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-3xl font-bold">About this site</h1>
      <p className="text-gray-700">
        This little site is a static Next.js app. Add images to <code>/public/images</code> and edit the short notes in{" "}
        <code>/data/wishes.json</code>. Then redeploy to Vercel. Have fun and happy birthday! 🎉
      </p>
    </div>
  );
}
