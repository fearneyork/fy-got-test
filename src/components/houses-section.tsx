import { styled } from "styled-components";
import useStore from "../utils/store";
import { THouseMember, THouseName, THouseSlug } from "../utils/types";

const HouseContainer = styled.div`
  width: 80%;
  height: 200px;
`;

const HouseName = styled.h3`
`;
const MemberName = styled.h3`
`;

const MemberContainer = styled.div`
  width: 80%;
  height: 200px;
`;

interface MembersSectionProps {
  house: {
    slug: THouseSlug;
    name: THouseName;
    members: THouseMember[];
  }
}

const MembersSection = ({ house }: MembersSectionProps) => {
  return (
    <MemberContainer>
      {house.members.map((member: THouseMember) => (
        <>
          <MemberName>{member.name}</MemberName>
        </>
      ))}
    </MemberContainer>
  );
};

const HouseSection = () => {
  const housesAndQuotes = useStore(state => state.housesAndQuotes);
  return (
    <HouseContainer>
      {housesAndQuotes?.map((house) => (
        <>
          <HouseName> {house.name}</HouseName>
          <MembersSection house={house} />
        </>
      ))}
    </HouseContainer >
  )
};

export default HouseSection;