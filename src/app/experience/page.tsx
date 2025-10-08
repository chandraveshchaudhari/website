import siteConfig from "@/config/config";

export default function ExperiencePage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <ul className="space-y-4">
        {siteConfig.experience.map((exp, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{exp.role}</h2>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
