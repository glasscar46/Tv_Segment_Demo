import { FaRegImage } from "react-icons/fa";
import TitlePage from "../components/TitlePage";
import ProfileBox from "../components/ProfileBox";

import ProfileIcon from "../assets/profile.svg";

export default function HeaderRadiodifusorProfile({ titlePage }) {
  return (
    <div className="flex justify-between items-center mx-5 pt-14">
      <div className="flex items-center">
        <FaRegImage size={100} fill="#fff" />
        <TitlePage name={titlePage}></TitlePage>
      </div>
      <ProfileBox icon={ProfileIcon} />
    </div>
  );
}
