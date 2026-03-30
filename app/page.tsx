import Image from "next/image";

export default function Home() {
  return (
    <div className="flex sm:m-10! m-4! font-mono bg-background">
      <main className="relative flex w-full max-w-3xl flex-col  py-32 px-16  sm:items-start">
        <h1>
          I'm Abhinav. A senior software engineer with over 5 years of
          experience in building scalable web applications.
        </h1>
        <p className="text-neutral-400">Based in Bangalore, India</p>
        <br />
        <p>
          Currently I'm working on{" "}
          <a
            href="https://makebetterresume.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            MakeBetterResume
          </a>
          , a resume builder that helps job seekers create professional resumes
          in minutes using AI.
        </p>
        <br />
        <h2>Experience</h2>
        <ul className="pl-4!">
          <li>
            <a
              href="https://www.docket.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Docket.io
            </a>{" "}
            <span className="text-neutral-400">- April 2026 - Present</span>
            <ul className="pl-4! list-disc">
              <li>Just started the journey here.</li>
            </ul>
          </li>
          <br />
          <li>
            <a
              href="https://scispace.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Scispace
            </a>{" "}
            <span className="text-neutral-400">- July 2022 - March 2026</span>
            <ul className="pl-4! list-disc">
              <li>
                Led end to end development of multiple features across the
                product including an AI Agent.
              </li>
              <li>Engineered a new design system for the organisation.</li>
              <li>
                Mentored junior engineers, set up best practices for the
                codebase and took over 100 interviews for the organisation.
              </li>
              <li>
                Led the front end engineering of the company through multiple
                pivotes and features
              </li>
            </ul>
            <br />
          </li>
          <li>
            <a
              href="https://ceegees.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Ceegees Software Solution
            </a>
            <span className="text-neutral-400"> - Feb 2021 - June 2022</span>
            <ul className="pl-4! list-disc">
              <li>Bootstrapped a product which helps in Team building</li>
            </ul>
            <br />
          </li>
        </ul>
        <h2>Contact</h2>
        <ul className="pl-4!">
          <li>
            <a
              href="https://x.com/abhi_vp_"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="mailto:vpofficial55@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abhinavvp/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/abhi12123"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
