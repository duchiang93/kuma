import { Link } from "react-router-dom";

const Item = ({ productId, image, title, content, setImg, setVisible }) => {
  return (
    <div className="themeItem">
      <div className="themeBox">
        <div className="imgBox">
          <img src={image} alt={title} />
        </div>
        <div className="textBox">
          <h2>{title}</h2>
          <p>扁平化 極簡 白 童趣 紅 綠</p>
          <div className="themeLink">
            <Link to={`/portfolio/${productId}`}>
              <i className="iconfont">&#xe624;</i>
            </Link>
            <a
              onClick={() => {
                setImg(image);
                setVisible(true);
              }}
            >
              <i className="iconfont">&#xe66b;</i>
            </a>
          </div>
        </div>
      </div>
      <h2 className="themeTitle">{title}</h2>
      <div className="themeContent">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Item;
