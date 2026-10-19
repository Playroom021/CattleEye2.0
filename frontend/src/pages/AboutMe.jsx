import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-5 sm:px-8">
      <div className="mx-auto max-w-4xl">
        
        {/* Back Button / Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-green-700"
          >
            <span>←</span> Back to Home
          </Link>
        </div>

        {/* Profile Header Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-sm">
          {/* Banner / Cover area */}
          <div className="h-32 bg-gradient-to-r from-green-700 to-green-600 sm:h-48" />

          {/* Profile Info Container */}
          <div className="px-6 pb-8 pt-0 sm:px-10">
            <div className="relative -mt-16 flex flex-col sm:flex-row sm:items-end sm:justify-between">
              
              {/* Avatar & Title */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white shadow-md">
                  <img
                    src="/1792424006512.png"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 sm:mt-0">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Gyan Sharma 
                  </h1>
                  <p className="text-sm font-medium text-green-700">
                    Full-Stack Developer & AI Enthusiast
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-3 sm:mt-0">
                <a
                  href="mailto:gyanarunsharma19@gmail.com"
                  className="inline-flex items-center justify-center rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/Playroom021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Bio Section */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <h2 className="text-lg font-bold text-gray-900">About Me</h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                Hello! I am a passionate developer focused on building intuitive web applications, integrating modern AI solutions like computer vision, and creating delightful user experiences. Welcome to CattleEye, my AI-driven platform for smart livestock monitoring and management.
              </p>
            </div>

            {/* Skills / Tech Stack Grid */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <h2 className="text-lg font-bold text-gray-900">Tech Stack & Skills</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Node.js","java", "Python", "TypeScript", "AI / Machine Learning", "Git"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
