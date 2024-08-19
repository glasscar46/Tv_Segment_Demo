export default function ProfileBox({ icon }) {
  return (
    <div className="flex flex-row items-center justify-end ">
      <h3 className="pr-3 text-xl text-right text-sky-400">
        Nome do Telespectador
      </h3>

      <img className="w-24" src={icon} />
    </div>
  );
}
