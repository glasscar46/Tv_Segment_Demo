import TitlePage from "../components/TitlePage";
import ProfileBox from "../components/ProfileBox";

import ProfileIcon from "../assets/profile.svg";

export default function HeaderTitleProfile() {
  return (
    <div className="flex justify-between items-center mr-5">
      <TitlePage name={"Seu Guia de TV Aberta"} />

      <ProfileBox icon={ProfileIcon} />
    </div>
  );
}
