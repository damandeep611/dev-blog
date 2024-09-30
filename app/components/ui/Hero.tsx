import { Link } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="max-w-6xl container my-4 px-4   ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <img
              src="/images/pfpdark.jpeg"
              alt=""
              width={60}
              height={70}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold">Daman deep</span>
            <span className="text-gray-500 text-sm">Full stack Developer</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 ">
          <div className="flex justify-center items-center gap-2 font-light bg-green-200 p-1 px-4 rounded-xl">
            <span>
              <MdEmail />
            </span>
            <a href="mailto:work@devdaman.com" className="text-xs lg:text-base">
              work@devdaman.com
            </a>
          </div>
          <div className="hidden sm:block">
            <ul className="flex items-center justify-center gap-2">
              <li>
                <a>
                  <FaXTwitter className="w-5 h-5" />
                </a>
              </li>
              <li>
                <FaInstagram className="w-5 h-5" />
              </li>
              <li>
                <FaLinkedin className="w-5 h-5" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
