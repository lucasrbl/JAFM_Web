import { ElementType } from 'react';

export type BenefitsCardType = {
  cards: {
    Icon: ElementType;
    title: string;
    paragraphs: string;
  }[];
} & React.ComponentProps<'div'>;
