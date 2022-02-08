import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

export const Container = styled.div`
  background-image: url("https://d10srchmli830n.cloudfront.net/1642568611709_tnc.svg");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fffff;
  text-align: center;
  padding: 40px;
`;

export const CustomTitle = styled(Title)`
  color: #ffffff !important;
`;
