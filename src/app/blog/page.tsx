const blogs = []

export default function Blog() {
  return (
    <div className="w-full py-14 flex flex-wrap">
        <section className="w-full py-6 flex justify-between">
          <h1 className="tracking-wider font-bold text-gray dark:text-white text-2xl">Blog Posts</h1>
          <input className="bg-white dark:bg-black px-2 py-1 border-2 border-accent dark:border-gray focus:border-accent rounded-md outline-0" type="search" placeholder="Search..." name="search_input" id="searchInput" />
        </section>
        <div className={`py-2 ${blogs.length == 0 ? 'visible' : 'hidden'}`}>
          <p>Sorry to inform You, but there are no blog posts for now 😔.</p>
        </div>
    </div>
  );
}
