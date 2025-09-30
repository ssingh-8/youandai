export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-3xl font-bold">AI Consulting Starter</h1>
      <p>It works! Try the health check endpoint:</p>
      <a href="/api/health" className="text-blue-600 underline">
        /api/health
      </a>
      <div className="mt-6">
        <code className="rounded bg-gray-100 px-2 py-1">npm run dev</code>
        <span className="ml-2">then open http://localhost:3000</span>
      </div>
    </main>
  );
}
