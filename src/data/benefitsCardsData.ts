import { BenefitsCardsType } from '@/types';
import { FastForward, Monitor, LineChart } from 'lucide-react';

export const benefitsCardsData: BenefitsCardsType = [
  {
    Icon: FastForward,
    paragraphs:
      'Visualize o desenvolvimento do jovem a partir de relátorios com diferentes métricas, gráficos e tabelas, trazendo novos insights para uma melhor tomada de decisão',
    title: 'Visualize os Dados de Forma Diversificada',
  },
  {
    Icon: Monitor,
    paragraphs:
      'Nosso sistema responsivo permite acesso em qualquer dispositivo e integrações poderosas com ferramentas como Power BI para uma gestão completa e eficiente.',
    title: 'Acesse de Qualquer Lugar, a Qualquer Hora!',
  },
  {
    Icon: LineChart,
    paragraphs:
      'Com o aplicativo para dispositivos móveis do Jovem Aprendiz Forms Management, o jovem pode acompanhar seu próprio desenvolvimento e conferir seus certificados',
    title: 'Torne o Processo Intuitivo para o Jovem',
  },
];
