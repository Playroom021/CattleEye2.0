import NavBar from "../components/NavBar";

const teamMembers = [
  {
    name: "Gyan Sharma",
    initials: "GS",
    role: "Full-Stack Developer",
    contribution:
      "Works across frontend development, backend integration, and overall project development for CattleEye.",
    skills: ["React", "TypeScript", "Python", "AI / ML"],
    accent: "from-green-700 to-emerald-500",
    email: "gyanarunsharma19@gmail.com",
    github: "https://github.com/Playroom021",
  },
  {
    name: "Devansh",
    initials: "D",
    role: "Backend Developer",
    contribution:
      "Contributes to backend development, API integration, and the server-side functionality of the project.",
    skills: ["Backend Development", "APIs", "Integration"],
    accent: "from-blue-700 to-cyan-500",
    email:"devanshgoel.297@gmail.com",
    github:"",
  },
  {
    name: "Harshinder",
    initials: "H",
    role: "ML Engineer & Backend Developer",
    contribution:
      "Works on machine learning model training and backend development to support cattle breed identification.",
    skills: ["Machine Learning", "Python", "Model Training", "Backend"],
    accent: "from-purple-700 to-indigo-500",
    email: "harshindercse@gmail.com",
    github: "https://github.com/HarshinderSingh10",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <NavBar />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Team Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 px-6 py-12 text-center text-white shadow-lg sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-emerald-300/20 blur-2xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
              Meet the Team
            </span>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
              The People Behind CattleEye
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-50 sm:text-base">
              We are a team of developers working together to build an
              AI-powered cattle intelligence platform for breed identification
              and smarter livestock monitoring.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                AI & Machine Learning
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                Full-Stack Development
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                Team Collaboration
              </span>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="mt-12">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
              Our Team
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Meet Our Members
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
              Each member contributes different skills toward building and
              improving CattleEye.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group flex flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >
                {/* Avatar */}
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${member.accent} text-2xl font-extrabold text-white shadow-lg ring-4 ring-green-50`}
                    aria-label={`${member.name} initials`}
                  >
                    {member.initials}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>

                  <p className="mt-2 rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-800">
                    {member.role}
                  </p>
                </div>

                <div className="my-6 border-t border-gray-100" />

                <p className="flex-1 text-sm leading-7 text-gray-600">
                  {member.contribution}
                </p>

                {/* Skills */}
                <div className="mt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Focus Areas
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-1.5 text-xs font-medium text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Links */}
                {(member.email || member.github) && (
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-100 pt-5">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm font-semibold text-green-700 transition hover:text-green-900"
                      >
                        Email ↗
                      </a>
                    )}

                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-gray-700 transition hover:text-green-700"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Project Mission */}
        <section className="mt-12 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
                Our Mission
              </p>
              <h2 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
                Technology for smarter livestock monitoring
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
                CattleEye brings together software development and artificial
                intelligence to explore practical solutions for cattle breed
                identification and livestock intelligence.
              </p>
            </div>

            <a
              href="mailto:gyanarunsharma19@gmail.com"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Contact the Team
            </a>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-gray-500">
          Built with teamwork and technology · CattleEye
        </footer>
      </main>
    </div>
  );
}