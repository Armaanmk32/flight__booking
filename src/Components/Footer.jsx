function Footer() {
  return (
    <div className="w-full sm:h-[450px] h-[1300px] mt-20  bg-sky-500 dark:bg-gray-800 transition-colors duration-300">
      <div className="sm:flex gap-20 px-10 ">
        <div className="text-[var(--text-color)] dark:text-white">
          <p className="text-3xl font-bold pt-10">SOM Airline</p>
          <h1 className="pt-5">Somali Airlines, was the national</h1>
          <h1>in 1964 it operated both</h1>
          <h1>However, the airline faced</h1>
          <h1>and international carrier of</h1>
          <h1>If you have specific questions</h1>
          <h1>SOM Airline or need information</h1>
        </div>

        <div className="text-[var(--text-color)] dark:text-white">
          <p className="text-3xl font-bold pt-10">COMPANY</p>
          <h1 className="pt-5">About</h1>
          <h1 className="pt-5">Features</h1>
          <h1 className="pt-5">Works</h1>
          <h1 className="pt-5">Career</h1>
        </div>

        <div className="text-[var(--text-color)] dark:text-white">
          <p className="text-3xl font-bold pt-10">Resources</p>
          <h1 className="pt-5">Free eBooks</h1>
          <h1 className="pt-5">Development Tutorial</h1>
          <h1 className="pt-5">How to - Blog</h1>
          <h1 className="pt-5">Youtube Playlist</h1>
        </div>

        <div>
          <div>
            <p className="text-3xl font-bold pt-10 text-[var(--text-color)] dark:text-white">NEWSLETTER</p>
          </div>
          <div className="pt-5">
            <input
              className="w-72 h-14 pl-12 rounded-xl border-2 border-[var(--border-color)] text-[var(--text-color)] dark:text-white bg-[var(--background-color)] dark:bg-gray-700"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="w-72 h-14 rounded-xl mt-5 block bg-sky-500 text-[var(--text-color)] dark:text-white border-2 border-[var(--border-color)] dark:bg-gray-700">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="px-10">
        <ul className="flex gap-5 pt-10 text-2xl text-[var(--text-color)] dark:text-white">
          <li>
            <i className="fa-brands fa-x-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
        </ul>
        <div className="flex justify-between">
          <div className="sm:flex pt-10">
            <ul className="sm:flex gap-10 text-[var(--text-color)] dark:text-white">
              <li>About us</li>
              <li>Contact</li>
              <li>Privacy policy</li>
              <li>Sitemap</li>
              <li>Terms of Use</li>
            </ul>
            <h1 className="sm:ml-[400px] mt-5 sm:mt-0 text-[var(--text-color)] dark:text-white">
              <i className="fa-regular fa-copyright"></i> 2024, All Rights Reserved
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
