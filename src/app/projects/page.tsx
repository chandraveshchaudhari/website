import siteConfig from "@/config/config";

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {siteConfig.projects.map((proj, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{proj.title}</h2>
            <p className="text-gray-600 mb-2">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View Project →
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
