import defaultImage from "../utilities/assets/avatar.jpg";

export default function Avatar({ src, alt, deco }) {
  
  return <img className={deco} src={src ? src : defaultImage} alt={alt} />;
}
