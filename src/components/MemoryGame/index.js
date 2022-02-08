import { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";

import FlipCard from "../FlipCard";

import { images } from "../../utils/constants";
import { Container, CustomTitle } from "./style";

const MemoryGame = () => {
  const [imagesArray, setImagesArray] = useState([]);
  const [score, setScore] = useState(0);

  const [matchedIds, setMatchedIds] = useState([]);
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState([]);
  const [currentSelectedImage, setCurrentSelectedImage] = useState(null);

  const flipImage = (image, index) => {
    //handle double clicks and already matched ids
    if (matchedIds.includes(image) || currentSelectedIndex.length === 2) return;

    if (!currentSelectedImage) {
      setCurrentSelectedIndex([index]);
      setCurrentSelectedImage(image);
      return;
    }
    setCurrentSelectedIndex([...currentSelectedIndex, index]);

    if (currentSelectedImage === image) {
      setScore((score) => score + 1);
      setMatchedIds([...matchedIds, image]);
      flipBack(200);
    } else {
      flipBack(500);
    }
  };

  const flipBack = (timer) => {
    setTimeout(() => {
      setCurrentSelectedImage(null);
      setCurrentSelectedIndex([]);
    }, timer);
  };

  const isMatched = (image, index) => {
    return matchedIds.includes(image) || currentSelectedIndex.includes(index);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const reset = () => {
    setScore(0);
    setMatchedIds([]);
    setCurrentSelectedIndex([]);
    currentSelectedImage(null);
  };

  const createGameBoard = () => {
    setImagesArray(shuffleArray([...images, ...images]));
  };

  useEffect(() => {
    createGameBoard();
  }, []);

  return (
    <Container>
      <Row justify="center">
        <Col xs={20} sm={20} md={18} lg={18} xl={12}>
          <CustomTitle level={2}>Memory Game</CustomTitle>
          <CustomTitle level={4} className="mb-16">
            Score : {score}
          </CustomTitle>
          <Button type="primary" onClick={reset} className="mb-24">
            Reset
          </Button>

          <Row gutter={[16, 16]} justif="center">
            {imagesArray?.map((image, index) => (
              <FlipCard
                index={index}
                image={image}
                key={image + index}
                flipImage={flipImage}
                isMatched={isMatched}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MemoryGame;
