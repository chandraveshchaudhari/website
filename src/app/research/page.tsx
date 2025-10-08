import siteConfig from "@/config/config";

export default function ResearchPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6">Research</h1>
      <ul className="space-y-4">
        {siteConfig.research.map((paper, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{paper.title}</h2>
            <p className="text-gray-600">{paper.journal}</p>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Read More →
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
