export default function Home() {
  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Welcome to You&AI</h2>
        <p className="text-slate-600">
          This starter showcases a minimal Next.js App Router setup with Tailwind CSS and
          a health endpoint. Use the sidebar to navigate and expand it to reveal labels.
        </p>
        <a
          href="/api/health"
          className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Check API Health
          <span className="text-xs font-normal text-slate-300">GET /api/health</span>
        </a>
      </section>

      <section id="contact" className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-900">Contact Us</h3>
        <p className="mt-2 text-sm text-slate-600">
          Have a project in mind? We’d love to hear from you. Drop us a note and we’ll get back
          within one business day.
        </p>
        <form className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-slate-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-slate-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your goals..."
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-slate-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
