import "./Personalimg.css";
const Profileimg = (prop) => {
  return (
    <div className="parent-personal-img">
      <div>
        <div className="bc-added"></div>
        <div>
          <img className="personal-img" src={prop.imageUrl} alt="img1" />
          {console.log(prop.imageUrl)}
        </div>
      </div>
    </div>
  );
};

export default Profileimg;
