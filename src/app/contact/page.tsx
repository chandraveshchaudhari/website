import siteConfig from "@/config/config";

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <section className="py-12 text-center space-y-4">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="text-gray-600">Feel free to reach out to me:</p>
      <div className="space-y-2">
        <p>Email: <a href={`mailto:${contact.email}`} className="text-primary">{contact.email}</a></p>
        <p>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary">
            LinkedIn
          </a>
        </p>
        <p>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-primary">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
