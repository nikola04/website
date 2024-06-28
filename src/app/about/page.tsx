export default function About() {
  return (
    <div className="py-14 flex flex-col">
      <section className="py-6">
        <h1 className="tracking-wider font-bold text-gray dark:text-white text-2xl">About Me</h1>
        <div className="py-3">
          <p className="py-2 px-2">Hello, my name is Nikola Nedeljković and I'm a Full Stack Developer with a deep passion for coding. <br/>Currently, I'm studying software engineering and working on web projects in my spare time.<br/>I continuously practice and learn new technologies to enhance my skills.</p>
          <p className="py-2 px-2">My native language is Serbian, and I'm fluent in English.</p>
        </div>
        <h1 className="tracking-wider font-bold text-gray dark:text-white text-2xl pt-6">Skills</h1>
        <div className="py-3">
          <p className="py-2 px-2">I have been programming as a hobby for five years. During this period, I have gained experience in: </p>
          <p className="py-2 px-2"><b>Front-End:</b> JavaScript, React, Tailwind, HTML, CSS<br/><b>Back-End:</b> Node.js, TypeScript, Express, Next.js, REST APIs<br/><b>Databases:</b> MySQL, MongoDB, Pocketbase<br/><b>System Back-End:</b> C & Java</p>
          <p className="py-2 px-2">Additionally, I have experience working with <b>Linux</b>, <b>Docker</b> and <b>Cloud Computing</b> (Google Cloud, Oracle Cloud).</p>
        </div>
        <h1 className="tracking-wider font-bold text-gray dark:text-white text-2xl pt-6">Contact</h1>
        <div className="py-3">
          <p className="py-2 px-2">Belgrade, Serbia<br/>nikolanedeljkovic.official@gmail.com</p>
        </div>
      </section>
    </div>
  )
}