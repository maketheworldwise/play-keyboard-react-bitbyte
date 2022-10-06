import styled from 'styled-components';

export default function Emoticons({ data }) {
  return (
    <Container>
      <Contents>
        {data.figure &&
          data.figure.map((p, index) => {
            return (
              <ContentWrapper key={index}>
                <Contentsimg src={p.imageUrl} alt={'contents'} />
              </ContentWrapper>
            );
          })}
      </Contents>
      <TextWrapper>
        <Text>{data.reviewNoticeContent}</Text>
        <Linetext>{data.reviewNoticeTitle}</Linetext>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2.5em 0.94em;
`; // 부모요소에 width값 설정시 여백발생

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &::after {
    content: '';
    display: flex;
    width: 25%;
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
    width: 25%;
  }
`;

const Contentsimg = styled.img`
  width: 100%;
`;

const TextWrapper = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  font-size: 14px;

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
  @media screen and (min-width: 600px) {
    font-size: 20px;
  }
`;

const Text = styled.div`
  line-height: 24px;
  width: 85%;
  color: #919299;
`;

const Linetext = styled.div`
  line-height: 24px;
  width: 85%;
  color: #4b4e57;
  text-decoration: underline;
  margin-top: 3px;
`;
