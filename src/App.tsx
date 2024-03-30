import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import VideoCard from "./components/VideoCard";

function App() {
  const shopElement = document.getElementById("shop-link");
  if (shopElement) {
    document.body.onscroll = () => {
      const isAtBottom =
        document.body.scrollHeight - window.innerHeight === window.scrollY;

      if (isAtBottom) {
        if (window.innerWidth < 768) shopElement.style.visibility = "hidden";
      } else {
        shopElement.style.visibility = "visible";
      }
    };
  }

  return (
    <div className="relative flex flex-col justify-center items-center">
      {/* Navigation Bar */}
      <NavBar />

      {/* Slogan */}
      <div>
        <div className="flex flex-col items-center font-semibold space-y-4 mt-44 text-3xl sm:text-6xl md:text-7xl">
          <span>A brand and product</span>
          <span>designer working with</span>
          <span>clients globally</span>
        </div>
      </div>

      {/* Tags */}
      <div className="tags flex items-center justify-center gap-2 mt-12 mb-40 scale-75">
        <div id="expertise" className="text-xl">
          Expertise
        </div>
        <div className="rounded-full w-auto text-xl p-2 text-center bg-lgray">
          Branding
        </div>
        <div className="rounded-full w-auto text-xl p-2 text-center bg-lgray">
          Product
        </div>
        <div className="rounded-full w-auto text-xl p-2 text-center bg-lgray">
          Design Systems
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 mt-8 w-5/6 lg:w-4/6 lg:grid-cols-2 gap-4">
        <Card
          href="#"
          isReady={true}
          src="https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024"
          text="Aire"
        />
        <Card
          href="#"
          isReady={true}
          src="https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024"
          text="Correlated"
        />
        <Card
          href="#"
          isReady={true}
          src="https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024"
          text="Channel 5"
        />
        <Card
          href="#"
          isReady={true}
          src="https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024"
          text="Ronald Abram"
        />
        <VideoCard
          href="#"
          isReady={true}
          src="https://framerusercontent.com/modules/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M~Jq48dGctHPeHtnn90xE_Aem-3HQJB_aNVwfu2fao5Ok.mp4"
          text="Propeller"
        />
        <Card
          href="#"
          isReady={true}
          src="https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024"
          text="Schuh"
        />
        <Card
          href="#"
          isReady={true}
          src="https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg"
          text="Paperstreet"
        />
        <VideoCard
          href="#"
          isReady={true}
          src="https://framerusercontent.com/modules/assets/SGjFvgcbK7s4yKh0xwuNjriMNII~5SCIlrVv6SNR5PFMjsMv3qAIi3sYsG2gjdlB0qM-tng.mp4"
          text="OH.SUPPLY"
        />
        <Card
          href="#"
          isReady={true}
          src="https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=1024"
          text="Monokel Eyewear"
        />
        <Card
          href="#"
          isReady={false}
          src="https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024"
          text="Lawtrades"
        />
        <Card
          href="#"
          isReady={false}
          src="https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024"
          text="Baselworld"
        />
        <VideoCard
          href="#"
          isReady={true}
          src="https://framerusercontent.com/modules/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg~DPEeC0jYyBwx9c865cOkUi-KzBM-3ukyhpgtPhvYo_U.mp4"
          text="NYCB"
        />
      </div>

      {/* Second Slogan */}
      <div className="my-44">
        <div className="flex flex-col items-center font-semibold my-36 text-3xl sm:text-6xl md:text-4xl">
          <span>Let's work together.</span>
          <span className="text-gray">Get in touch.</span>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full lg:w-4/6 relative text-xs sm:text-sm font-semibold mb-8">
        <div className="author absolute -top-6 start-12 lg:start-0">
          © Oli Harris 2023
        </div>
        <div className="socials flex gap-3 absolute -top-6 end-12 lg:end-0">
          <a href="http://www.twitter.com" target="_blank">
            Twitter
          </a>
          <a href="http://www.linkedin.com" target="_blank">
            Linkedin
          </a>
          <a href="http://www.gmail.com" target="_blank">
            Mail
          </a>
        </div>
      </div>

      {/* Shop Link */}
      <a
        id="shop-link"
        className="flex items-center justify-center gap-2 rounded-full w-auto text-xl py-3 px-5 text-center bg-black text-white scale-75 fixed bottom-4"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
        </svg>
        <span className="text-xl font-semibold">Shop</span>
      </a>
    </div>
  );
}

export default App;
