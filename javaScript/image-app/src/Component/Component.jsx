import { Link } from "react-router-dom";
const Component = () => {
  return (
    <>
      <div className="Nav-Wrappper flex items-center justify-center bg-green-700 h-10 text-white">
        <div className="px-5">
          
          <a href="/Home">Home</a>
        </div>
        <div className="px-5">
          <a href="/Material">Material</a>
        </div>
        <div className="px-5">
          <a href="/Blog">Blog</a>
        </div>
        <div className="px-5">
          <a href="/Contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Component;
