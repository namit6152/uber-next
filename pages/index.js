import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import Map from "./components/Map";
import Link from "next/link";

mapboxgl.accessToken =
  "pk.eyJ1IjoibmFtaXQ2MTUyIiwiYSI6ImNrdnJ2Z2ZsaDh0ZDMybnF3NXlsczU3eHIifQ.qXGTJtOHv93QEC02pEKGaA";

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });
  return (
    <Wrapper>
      <Map />
      <ActionItem>
        {/* header */}
        <Header>
          {/* self closing Tag */}
          <UberLogo src="https://tse4.mm.bing.net/th?id=OIP.24VpZErMnYlVi5-MFQvj7QHaCw&pid=Api&P=0&w=454&h=170" />

          <Profile>
            <Name>Namit kumar</Name>
            <UserImage src="https://lh3.googleusercontent.com/a-/AOh14GjdN7OGXG4av_JFZrgPF5mMV0o9pccpp2pwAyIQdA=s576-p-rw-no" />
          </Profile>
        </Header>

        {/* Action Button */}
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://www.motorbiscuit.com/wp-content/uploads/2020/05/Lexus-GS_F-2016-1600-02.jpg" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage
              src="https://www.pluginindia.com/uploads/2/1/8/5/21854234/hero-lectro-f6i-black1_orig.jpg
"
            />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="	https://polarcanvas.com/images/thumbs/0000021_desk-calendar-design-01.jpeg" />
            Reserved
          </ActionButton>
        </ActionButtons>
        {/* InputButton */}
        <InputButton>Wher to ?</InputButton>
      </ActionItem>
    </Wrapper>
  );
}
const Wrapper = tw.div`
flex flex-col 
h-screen
`;

const ActionItem = tw.div`
flex-1 p-4

`;
const Header = tw.div`flex justify-between items-center mb-5`;
const UberLogo = tw.img`h-12 `;
const Profile = tw.div`flex items-center`;
const Name = tw.div`mr-4 w-20 text-sm`;
const UserImage = tw.img`h-12 w-12 rounded-full border border-gray-200 p-px`;
const ActionButtons = tw.div`
flex
`;

//use hover transition transform
const ActionButton = tw.div`flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg
transform hover:scale-105 transition text-xl`;
const ActionButtonImage = tw.img`h-3/5`;

const InputButton = tw.div`bg-gray-200 text-2xl h-20 p-4 flex items-center mt-8`;
