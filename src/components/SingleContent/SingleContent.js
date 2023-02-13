import { img_300, unavailable } from "../../config/Config";
import "./SingleContent.css"

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="media">
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitile">
        {media_type === "tv" ? "TV Series" : "Movies"}
        <span className="subTitile">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
