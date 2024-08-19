/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

export default function NextButton({ href }) {
  return (
    <Link
      className="flex items-center rounded border border-white p-4 text-lg hover:bg-emerald-600 transition-all duration-300 gap-2"
      to={href}
    >
      Avançar
      <BsArrowRightShort size={30} />
    </Link>
  );
}
