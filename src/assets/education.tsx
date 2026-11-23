
import { profile } from "../data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-blue-400 uppercase tracking-widest text-sm">
            My Academic Background
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Education
          </h2>
        </div>

        {profile.education.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-blue-500/30
            bg-slate-900/70 p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white">
              {item.degree}
            </h3>

            <p className="text-gray-300 mt-4">
              {item.institution}
            </p>

            <p className="text-blue-400 mt-4">
              Graduation Year: {item.graduationYear}
            </p>

            <span className="text-green-400 text-sm">
              {item.status}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
}
