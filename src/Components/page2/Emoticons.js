import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../Pages/Detail/Api';

export default function Emoticons() {
  const [data, setdata] = useState([]);
  const params = useParams();
  const detailid = params.themeId;

  useEffect(() => {
    getDetail(detailid).then(function (json) {
      setdata(json.data.figure);
    });
  }, []);
  console.log('test', data);

  return (
    <Container>
      <Contents>
        {data &&
          data.map(p => {
            return (
              <ContentWrapper>
                <Contensimg src={p.imageUrl} />
              </ContentWrapper>
            );
          })}
      </Contents>
      <TextWrapper>
        <Text>
          일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는 이모티콘으로 전송될 수
          있어요.
        </Text>
      </TextWrapper>
    </Container>
  );
}

const Text = styled.div`
  width: 290px;
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  font-size: 14px;
  margin-left: 34px;
  margin-right: 34px;
`;

const ContentWrapper = styled.div`
  width: 25%;
  margin-right: 30.64px;
  margin-bottom: 29.84px;
  @media only handheld and (min-width: 50px) {
    width: 20%;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  padding: 0;
`;

const Contensimg = styled.img`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;
