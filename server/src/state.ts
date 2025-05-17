export interface Slide {
  id: string;
  content: string;
  image?: string;
  speakerNotes: string;
  slideContent: string;
  layout: string;
}

export const slides: Record<string, Slide> = {};
