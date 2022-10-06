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
        <Linetext>이모티콘은 어떻게 전송하나요?</Linetext>
      </TextWrapper>
    </Container>
  );
}

const Linetext = styled.div`
  line-height: 24px;
  width: 85%;
  color: #4b4e57;
  text-decoration: underline;
  margin-top: 3px;
`;

const Text = styled.div`
  line-height: 24px;
  width: 85%;
  color: #919299;
`;
const TextWrapper = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 14px;
  margin-left: 34px;
  margin-right: 34px;
  margin-bottom: 40px;
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: url('//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2')
        format('woff2'),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff)
        format('woff'),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf)
        format('opentype');
  }
`;

const ContentWrapper = styled.div`
  width: 23%;
  margin-top: 35px;
  :nth-child(3n-1) {
    margin-left: 12%;
    margin-right: 10%;
  }
  :nth-child(3n) {
    margin-right: 3%;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92%;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 4%;
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
