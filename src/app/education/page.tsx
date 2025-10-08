import siteConfig from "@/config/config";

export default function EducationPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      <ul className="space-y-4">
        {siteConfig.education.map((edu, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{edu.degree}</h2>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
