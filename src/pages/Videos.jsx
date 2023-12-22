import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  //flex-wrap: wrap;
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  transition: all .3s linear;
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all .3s linear;
    align-items: center;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LatestContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  transition: all .3s linear;
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all .3s linear;
    align-items: center;
  }
`;



const GlobalBackground = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 125px;
  min-height: 350px;
  background-color: #eeeeee;
  opacity: 0.5;
  z-index: -1;
  background: repeating-linear-gradient(
    -45deg,
    #dddddd,
    #dddddd 2px,
    #eeeeee 2px,
    #eeeeee 10px
  );
  @media (max-width: 1280px) {
    min-height: 320px;
    transition: all .3s linear;
  }
  @media (max-width: 1016px) {
    min-height: 280px;
    transition: all .3s linear;
  }
  @media (max-width: 860px) {
    min-height: 260px;
    transition: all .3s linear;
  }
  @media (max-width: 780px) {
    min-height: 1000px;
    display: flex;
    flex-direction: column;
    transition: all .3s linear;
  }
`;

const LastestBackground = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 110px;
  min-height: 800px;
  background-color: #eeeeee;
  opacity: 0.5;
  z-index: -1;
  background-color: #f7f4f1;
`;

const VideoPost = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: black;
  flex: 1;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  background-color: white;

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer:
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 1330px) {
    max-width: 320px;
    transition: all .6s linear;
  }
  @media (max-width: 1030px) {
    max-width: 240px;
    transition: all .6s linear;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
`;

const VideoImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
`;

const TitleContainer = styled.div`
  padding: 20px 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-family: "Roboto Condensed";
  font-weight: 400;
`;

const Date = styled.div`
  font-weight: 600;
  font-size: 12px;
  opacity: 0.5;
`;

const TitleText = styled.div`
  font-size: 32px;
  font-weight: bold;
  font-family: "Roboto Condensed";
  font-weight: 700;
  border-bottom: 10px solid black;
  margin-bottom: 20px;
  padding-bottom: 20px;
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
`;

const LatestText = styled.div`
  font-size: 32px;
  font-weight: bold;
  font-family: "Roboto Condensed";
  font-weight: 700;
  border-bottom: none;
  margin-bottom: 0px;
  padding-bottom: 20px;
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
`;

const BorederLatestRed = styled.div`
  height: 40px;
  max-width: 1320px;
  border-top: 10px solid red;
  border-right: 10px solid red;
  border-top-right-radius: 25px;
  color: red;
  margin-bottom: 20px;
  max-width: 1310px;
  margin-left: auto;
  margin-right: auto;
`;

const Block = styled.div`
  padding: 40px 8px;
`;

const HighlightsHeader = () => {
  return <TitleText>Highlights</TitleText>;
};

const ConversationHeader = () => {
  return <TitleText>Conversations</TitleText>;
};

const LatestHeader = () => {
  return <LatestText>Latest Video</LatestText>;
};

const Home = () => {
  const videos = [
    {
      image:
        "https://cdn.discordapp.com/attachments/1057350594257485946/1182747343699841164/twitch.png",
      title: "S5R1 Austia highlights",
      date: "21/09/23",
      link: "https://www.youtube.com/watch?v=Uj-unhKyRDE&list=PLOIm3OyfdcPqFmW0ixKpyfFIIRaOCYYXc&index=10",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/1057350594257485946/1182747343699841164/twitch.png",
      title: "S5R1 Austia highlights",
      date: "21/09/23",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/1057350594257485946/1182747343699841164/twitch.png",
      title: "S5R1 Austia highlights",
      date: "21/09/23",
    },
  ];

  const conversation = [
    {
      image: "https://i.ytimg.com/vi/Mv0qzodXQaI/maxresdefault.jpg",
      title: "Daniil Kalayko",
      date: "21/09/23",
    },
    {
      image: "https://i.ytimg.com/vi/Mv0qzodXQaI/maxresdefault.jpg",
      title: "Daniil Kalayko",
      date: "21/09/23",
    },
    {
      image: "https://i.ytimg.com/vi/Mv0qzodXQaI/maxresdefault.jpg",
      title: "Daniil Kalayko",
      date: "21/09/23",
    },
  ];

  const latestVideo = [
    {
      image: "https://i.ytimg.com/vi/Mv0qzodXQaI/maxresdefault.jpg",
      title: "Daniil Kalayko",
      date: "21/09/23",
      link: "https://www.youtube.com/watch?v=Uj-unhKyRDE",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/1057350594257485946/1182747343699841164/twitch.png",
      title: "S5R1 Austia highlights",
      date: "21/09/23",
    },
    {
      image: "https://i.ytimg.com/vi/Mv0qzodXQaI/maxresdefault.jpg",
      title: "Daniil Kalayko",
      date: "21/09/23",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/1057350594257485946/1182747343699841164/twitch.png",
      title: "S5R1 Austia highlights",
      date: "21/09/23",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/1057350594257485946/1182747343699841164/twitch.png",
      title: "S5R1 Austia highlights",
      date: "21/09/23",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/1057350594257485946/1182747343699841164/twitch.png",
      title: "S5R1 Austia highlights",
      date: "21/09/23",
    },
  ];

  return (
    <div>
    <MainContainer>
      <GlobalBackground />
      <Block>
        <HighlightsHeader />
        <PostsContainer>
          {videos.map((item, key) => {
            return (
              <Link
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-props-disabled"
              >
                <VideoPost>
                  <VideoContainer>
                    <VideoImage src={item.image} />
                  </VideoContainer>
                  <TitleContainer>
                    <Date>{item.date}</Date>
                    <Title>{item.title}</Title>
                  </TitleContainer>
                </VideoPost>
              </Link>
            );
          })}
        </PostsContainer>
      </Block>
      </MainContainer>
      <div>
      <MainContainer>
        <GlobalBackground />
        <Block>
          <ConversationHeader />
          <PostsContainer>
            {conversation.map((item, key) => {
              return (
                <Link
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-props-disabled"
                >
                  <VideoPost>
                    <VideoContainer>
                      <VideoImage src={item.image} />
                    </VideoContainer>
                    <TitleContainer>
                      <Date>{item.date}</Date>
                      <Title>{item.title}</Title>
                    </TitleContainer>
                  </VideoPost>
                </Link>
              );
            })}
          </PostsContainer>
        </Block>
      </MainContainer>
      </div>
      <div>
      <MainContainer>
      <LastestBackground />
        <Block>
          <LatestHeader />
          <BorederLatestRed />
          <LatestContainer>
            {latestVideo.map((item, key) => {
              return (
                <Link
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-props-disabled"
                >
                  <VideoPost>
                    <VideoContainer>
                      <VideoImage src={item.image} />
                    </VideoContainer>
                    <TitleContainer>
                      <Date>{item.date}</Date>
                      <Title>{item.title}</Title>
                    </TitleContainer>
                  </VideoPost>
                </Link>
              );
            })}
          </LatestContainer>
        </Block>
      </MainContainer>
      </div>
    
    </div>
  );
};

export default Home;
