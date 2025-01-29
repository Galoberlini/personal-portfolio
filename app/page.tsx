import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <header>
        <div className="fixed top-0 left-0 flex justify-between items-center w-full p-1 shadow-md"> 
          <Link href="/" className="text-orange-600 hover:bg-orange-500 hover:rounded-full hover:text-white text-sm p-2 rounded">
            Galo Berlini
          </Link>
          <Link href="/" className="text-orange-600  hover:bg-orange-500 hover:text-white hover:rounded-full p-2 text-sm rounded mr-10">
            Contact Me
          </Link>
        </div>
      </header>
      <div className="mt-16">
          {/* Hero */}
      </div>
      <div className="flex flex-col w-11/12 mx-auto">
        <div className="w-full mx-auto my-8 h-1.5 bg-orange-500 rounded-full"></div>
        <div className="mb-10 ml-20">
          <h1 className="text-4xl text-justify font-bold">
            About Me
          </h1>
          <p className="text-justify text-lg text-orange-500">
            A BIT ABOUT MYSELF
          </p>
        </div>
        <div className="flex justify-around items-start">
          <div>
            <p className="max-w-[300] w-full text-pretty text-md ">
              Since I was 11, I knew that I could make the most of my strengths as a programmer. 
              So, I decided to attend to &ldquo;Instituto Politécnico Superior&ldquo;
              one of the most demanding technical high schools in Rosario. After completing 
              the first three years of general education, I chose the &ldquo;IT&ldquo; orientation, where I learned...
            </p>
          </div>
          <Image
            className="rounded-xl"
            src="https://scontent.fros9-1.fna.fbcdn.net/v/t39.30808-6/299925982_187432163673456_4075394762315813463_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=C3x-OPUQicUQ7kNvgGXSBNd&_nc_oc=AdgpiZ839hA3NZq2WSJZ8lG6WQRrJN49_mOanKdOZWrSmsJpOvfImaoruLswSONGQ5jr3BAxd4i1NxZI8gS4B5ZV&_nc_zt=23&_nc_ht=scontent.fros9-1.fna&_nc_gid=AishI4Oc8RGUFTenGgUQFAT&oh=00_AYBxpBB3zl3YlGx1eggkuHyqzrqGku2TVOk0Y2hsa51ulg&oe=679F52E7"
            alt="Instituto Politecnico Superior"
            width={300}
            height={300}>
          </Image>
        </div>
        
      </div>
    </div>
  );
}
