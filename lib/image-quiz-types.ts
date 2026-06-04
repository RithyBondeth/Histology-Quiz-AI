import { Topic } from './quiz-data';

export interface ImageLabel {
  id: string;
  marker: string;
  xPercent: number;
  yPercent: number;
  answer: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface HistologyImage {
  id: string;
  topic: Topic;
  title: string;
  imageUrl: string;
  description: string;
  stain: string;
  labels: ImageLabel[];
  createdAt: string;
}

export interface ImageQuizStore {
  images: HistologyImage[];
}
