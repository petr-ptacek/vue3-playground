export type Destination = {
  name: string;
  slug: string;
  image: string;
  id: number;
  description: string;
  experiences: DestinationExperience[]
};

export type DestinationExperience = Omit<Destination, 'id' | 'experiences'>;