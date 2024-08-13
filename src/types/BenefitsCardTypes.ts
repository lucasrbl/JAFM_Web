import { ElementType } from 'react';

export interface BenefitsCardType {
  cards: {
    Icon: ElementType;
    title: string;
    paragraphs: string;
  }[];
}
