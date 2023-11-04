import profileImg from "../../assets/rampravesh-profile-img.jpg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="bg-rose-400 ">
      <ul className="flex justify-around  items-center">
        <li>
          <img
            className="w-20 h-20 rounded-full"
            src={profileImg}
            alt="profile-img"
          />
        </li>
        <li className="text-xl font-serif text-white cursor-pointer hover:underline decoration-slate-100">
          Home
        </li>
        <li className="text-xl font-serif text-white cursor-pointer hover:underline decoration-slate-100">
          About
        </li>
        <li className="text-xl font-serif text-white cursor-pointer hover:underline decoration-slate-100">
          Contact
        </li>
        <li className="text-xl font-serif text-white cursor-pointer hover:underline decoration-slate-100">
          Project
        </li>
        <li className="text-xl font-serif text-white cursor-pointer hover:underline decoration-slate-100">
          Skills
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
