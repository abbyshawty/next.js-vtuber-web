import Head from "next/head";
import * as icon from "react-icons/bs";
import * as logo from "react-icons/ai";
import Image from "next/image";
import isi from "../public/yanzoweb1.png";
import isiup from "../public/yanzo_png.png";
import { useState } from "react";
import Flippi from "../public/Flipi_Chibi_M.png";
import { Switch } from "@headlessui/react";
import Footer from "../components/footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Yanzo.Site</title>
        <meta name="description" content="genared by cre" />
        <link rel="icon" href="/yanzologofix.png" />
      </Head>
      <main className="px-5 bg-white w-full md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl md:-ml-28 font-JapaneseRobot text-sky-400">
              Yanzo.site
            </h1>
            <ul className="flex items-center">
              <li className="text-gray-600 md:-mr-24 dark:text-gray-100 flex items-center">
                <icon.BsFillSunFill className="text-2xl md:text-3xl mx-4 hidden dark:block" />
                <icon.BsFillMoonStarsFill className=" dark:hidden text-2xl md:text-3xl mx-4" />
                <Switch
                  checked={darkMode}
                  onChange={setDarkMode}
                  className={`${
                    darkMode ? "bg-slate-600" : "bg-gray-400"
                  } relative inline-flex h-6 w-11 items-center rounded-full `}
                >
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`${
                      darkMode ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-4xl md:text-5xl py-2 text-sky-400 font-medium">
              Tentang Yanzo
            </h2>
            <h3 className="text-2xl md:text-4xl py-2 text-gray-800 dark:text-gray-100">
              Vlogger dan Streamer
            </h3>
            <p className="text-gray-900 pt-5 md:text-lg dark:text-gray-100">
              hanya seorang virtual creator yang pengen ngerandom
              <span className="text-sky-300">jangan lupa mampir</span> UwU
            </p>
          </div>
          <div className="text-5xl md:text-6xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200">
            <a href="https://twitter.com/shawty_yanzo" target="_blank">
              <logo.AiFillTwitterCircle />
            </a>
            <a
              href="https://www.youtube.com/channel/UC6Kme05eD7un-m-ee9c5R4A"
              target="_blank"
            >
              <logo.AiFillYoutube />
            </a>
            <a href="https://www.instagram.com/yanzoch/" target="_blank">
              <logo.AiFillInstagram />
            </a>
          </div>
          <div className="relative mx-auto scale-75 md:scale-90 bg-gradient-to-b from-sky-300 to-gray-600 max-w-lg w-full rounded-full mt-20 overflow-hidden ">
            <Image src={isiup} className="scale-125" alt="logo" />
          </div>
        </section>

        <section>
          <h2 className="text-4xl md:text-5xl  font-semibold text-center text-sky-400 pt-12  ">
            The Creator
          </h2>
          <div className="flex flex-col w-full lg:flex-row mt-6 pb-32 items-start">
            <div className="lg:w-1/3 block relative z-0 overflow-hidden scale-75 md:scale-100 md:-ml-16 lg:mt-12">
              <Image src={isi} width={500} height={500} className="" />
              <Image
                src={Flippi}
                width={450}
                height={450}
                className="absolute bottom-4 scale-125 "
              />
            </div>
            <div className="lg:w-2/3 ">
              <h3 className="text-2xl font-semibold text-sky-400  py-1 pt-9  md:ml-6  dark:text-gray-100">
                Yanzo Shawty
              </h3>
              <p className="text-sm md:-mr-40 md:px-7 py-1 leading-8 tracking-wide text-gray-800 text-justify   dark:text-gray-100">
                Yanzo shawty, juga dikenal sebagai Yanzo, adalah seorang virtual
                YouTuber asal Indonesia yang terkenal dengan keseruannya dalam
                bermain game dan mengobrol dengan para penontonnya. Dia memiliki
                kepribadian yang kocak dan menyenangkan dengan ekspresi wajah
                yang sering kali datar. Selain itu, Yanzo juga memiliki
                kegemaran dalam melakukan parkour dan memainkan game dengan
                tangan kidalnya yang membuatnya semakin menarik. Jika Anda
                mencari hiburan yang menyenangkan, pastikan untuk mampir ke
                kanal YouTube Yanzo shawty dan menonton keseruan yang
                ditawarkannya.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
