import next from "next";
import link from "next/link";
import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Link from "next/link";
const Search = () => {
  return (
    <Wrapper>
      {/* button container */}
      <Link href="/">
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png" />
        </ButtonContainer>
      </Link>
      {/* input containerr */}
      <InputContainer>
        <FromToIcon>
          <Circle src="https://img.icons8.com/ios/50/000000/circled.png" />
          <Line src="https://img.icons8.com/ios/50/000000/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/32/000000/rectangle.png" />
        </FromToIcon>
        <InputBoxes>
          <Input placeholder="Enter Pickup location" />
          <Input placeholder="Where to ?" />
        </InputBoxes>
        <PlushIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      {/* save places */}
      <SavePlaces>
        <StarIcon src="https://img.icons8.com/ios/50/000000/star--v1.png" />
        Save Places
      </SavePlaces>

      {/* confirm location: */}
      <ConfirmLocation>
        <Button>Confirm Locations</Button>
      </ConfirmLocation>
    </Wrapper>
  );
};

export default Search;


const Wrapper = tw.div`bg-gray-200 h-screen`;
const ButtonContainer = tw.div`bg-white px-4`;
const BackButton = tw.img`h-12`;
const InputContainer = tw.div`bg-white flex items-center px-4 mb-2 `;
const FromToIcon = tw.div`w-10 flex-col mb-2  flex items-center mr-2`;
const Circle = tw.img`h-2.5`;
const Line = tw.img`h-10`;
const Square = tw.img`h-3`;
const InputBoxes = tw.div`flex flex-col flex-1`;
const Input = tw.input`h=10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none`;

const PlushIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3  
`;

const SavePlaces = tw.div`flex items-center bg-white px-4 mb-2`;
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2`;

const ConfirmLocation = tw.div`bg-black text-white h-10 w-50 flex mx-3.5 justify-center rounded-9  `;
const Button = tw.button`transform  active:bg-green-700  `;
