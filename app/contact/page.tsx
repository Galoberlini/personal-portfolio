import Link from "next/link";

export default function Page() {
  const ln = 'https://www.linkedin.com/in/galo-berlini-140575345/';

  return (
      <div className=" bg-blue-600 flex flex-col items-center">
        <Link
          className="text-black bg-white  text-3xl font-bold"
          href = {ln}> 
          LinkedIn 
        </Link>
      </div>
    );
  }
