export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/profile.png"
              width={400}
              height={400}
              loading="lazy"
              alt="Portrait of Esrail Haque, Full-Stack Developer"
              className="rounded-lg shadow-lg w-full h-auto"
            />

            {/* Signature overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-lg">
              <div className="flex items-end justify-between">
                <div className="text-white">
                  <p className="text-lg font-semibold">Esrail Haque</p>
                  <p className="text-sm text-gray-300">Full-Stack Developer</p>
                </div>
                <div className="text-cyan-400 text-2xl font-script">EH</div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-lg"></div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in the MERN
              stack. My journey in web development started with a curiosity
              about how websites work, and it has evolved into a deep passion
              for creating scalable, user-friendly applications.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I specialize in building modern web applications using React,
              Next.js, Node.js, and MongoDB. I'm committed to writing clean,
              maintainable code and staying up-to-date with the latest
              technologies and best practices.
            </p>

            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and tutorials.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h4 className="text-lg font-medium text-white">
                    Bachelor of Electrical and Electronics Engineering
                  </h4>
                  <p className="text-gray-400">
                    Sylhet Engineering College • 2022 - Present
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
