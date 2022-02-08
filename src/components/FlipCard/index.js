import { Col } from "antd";

const FlipCard = ({ index, flipImage, image, isMatched }) => {
  const frontImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/330px-MetaMask_Fox.svg.png";

  return (
    <Col xs={12} sm={12} md={8} lg={4} xl={4}>
      <img
        src={isMatched(image, index) ? image : frontImage}
        alt="crypto"
        className="pointer"
        onClick={() => flipImage(image, index)}
        width="100px"
        height="100px"
      />
    </Col>
  );
};

export default FlipCard;
