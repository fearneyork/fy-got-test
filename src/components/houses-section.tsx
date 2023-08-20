import { styled } from "styled-components";
import useStore from "../utils/store";
import { THouseMember, THouseName, THouseSlug } from "../utils/types";
import { BAELISH, BARATHEON, BOLTON, GREYJOY, LANNISTER, STARK, TARGARYEN, TARLY, TARTH, TYRELL } from "../utils/constants";

const HousesContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex-wrap: no-wrap;
  `;

const HouseContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  margin: 10px;
`;

const HouseName = styled.h3`
  width: 200px;
  font-size: 22px;
  text-align: center;
`;

const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MemberName = styled.h3`
`;

const MemberQuote = styled.p`
  font-size: 18px;
`;

const MemberContainer = styled.div`
`;

const HouseBannerContainer = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: flex-start;
`;

const findSigilBySlug = (slug: THouseSlug) => {
  if (slug === 'stark') return STARK;
  if (slug === 'lannister') return LANNISTER;
  if (slug === 'baratheon') return BARATHEON;
  if (slug === 'targaryen') return TARGARYEN;
  if (slug === 'greyjoy') return GREYJOY;
  if (slug === 'tarly') return TARLY;
  if (slug === 'tarth') return TARTH;
  if (slug === 'bolton') return BOLTON;
  if (slug === 'baelish') return BAELISH;
  if (slug === 'tyrell') return TYRELL;
}

const HouseBannerImage = styled.img`
  height: 150px;
  width: 150px;
  margin: 25px;
  `;

interface MembersSectionProps {
  house: {
    slug: THouseSlug;
    name: THouseName;
    members: THouseMember[];
  }
};


const HouseBanner = ({ house }: MembersSectionProps) => {
  return (
    <HouseBannerContainer>
      <HouseBannerImage src={`${findSigilBySlug(house.slug)}`} aria-label={`${house.slug} banner`} />
      <HouseName aria-label={`${house.slug} house name`}>{house.name}</HouseName>
    </HouseBannerContainer>

  )
};

const MembersSection = ({ house }: MembersSectionProps) => {
  return (
    <MemberContainer>
      {house.members.map((member: THouseMember) => (
        <MembersContainer>
          <MemberName aria-label={`${member.slug} section`}>{member.name}</MemberName>
          {member.quotes?.map((quote) => (
            <MemberQuote>{quote}</MemberQuote>
          ))}
        </MembersContainer>
      ))}
    </MemberContainer>
  );
};

const HouseSection = () => {
  const housesAndQuotes = useStore(state => state.housesAndQuotes);
  return (
    <HousesContainer>
      {housesAndQuotes?.map((house) => (
        <HouseContainer aria-label={`${house.slug} section`}>
          <HouseBanner house={house} aria-label={`${house.slug} banner`} />
          <MembersSection house={house} />
        </HouseContainer>
      ))}
    </HousesContainer >
  )
};

export default HouseSection;