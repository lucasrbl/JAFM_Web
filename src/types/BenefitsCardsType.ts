import { ElementType } from 'react';

export type BenefitsCardsType = {
  Icon: ElementType;
  title: string;
  paragraphs: string;
}[] &
  React.ComponentProps<'div'>;
