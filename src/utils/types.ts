
export type THouseSlug = "stark"
  | "lannister"
  | "baratheon"
  | "targaryen"
  | "greyjoy"
  | "tarly"
  | "tarth"
  | "bolton"
  | "baelish"
  | "tyrell";

export type THouseName = "House Stark of Winterfell"
  | "House Lannister of Casterly Rock"
  | "House Baratheon of Dragonstone"
  | "House Targaryen of King's Landing"
  | "House Greyjoy of Pyke"
  | "House Tarly of Horn Hill"
  | "House Tarth of Evenfall Hall"
  | "House Bolton of the Dreadfort"
  | "House Baelish of Harrenhal"
  | "House Tyrell of Highgarden";

export type THouseMemberSlug = "jon"
  | "sansa"
  | "ned"
  | "catelyn"
  | "arya"
  | "bran"
  | "jaime"
  | "tyrion"
  | "cersei"
  | "tywin"
  | "joffrey"
  | "robert"
  | "aerys"
  | "aemon"
  | "daenerys"
  | "theon"
  | "samwell"
  | "brienne"
  | "ramsay"
  | "baelish"
  | "olenna";

export type THouseMemberName = "Jon Snow"
  | "Sansa Stark"
  | "Ned Stark"
  | "Catelyn Stark"
  | "Arya Stark"
  | "Bran Stark"
  | "Jaime Lannister"
  | "Tyrion Lannister"
  | "Cersei Lannister"
  | "Tywin Lannister"
  | "Joffrey Baratheon"
  | "Robert Baratheon"
  | "Aerys II Targaryen"
  | "Aemon Targaryen"
  | "Daenerys Targaryen"
  | "Theon Greyjoy"
  | "Samwell Tarly"
  | "Brienne of Tarth"
  | "Ramsay Bolton"
  | "Petyr Baelish"
  | "Olenna Tyrell";

export type THouseMember = {
  name: THouseMemberName;
  slug: THouseMemberSlug;
  quotes?: string[];
};

export type TRandomQuote = {
  sentence: string;
  character: {
    name: THouseMemberName;
    slug: THouseMemberSlug;
    house: {
      name: THouseName;
      slug: THouseSlug;
    };
  };
};

export type THousesList = {
  slug: THouseSlug;
  name: THouseName;
  members: THouseMember[];
}[];
