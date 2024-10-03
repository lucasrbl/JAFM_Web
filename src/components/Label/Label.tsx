import { ComponentProps } from 'react';
type LabelPropTypes = {
  label: string;
  responsive: 'mobile' | 'desktop';
  className?: string;
} & ComponentProps<'label'>;

export const Label = ({ label, responsive, className }: LabelPropTypes) => {
  return (
    <>
      <label
        className={`${
          responsive === 'mobile' ? 'label-mobile' : 'label-desktop'
        } ${className}`}
      >
        {label}
      </label>
    </>
  );
};
