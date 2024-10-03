import { ComponentProps } from 'react';
import { If } from '../If/If';
import { EyeOff, Eye } from 'lucide-react';
import { useGlobalContext } from '@/context/useGlobalContext';

type InputPropTypes = {
  className?: string;
  responsive: 'mobile' | 'desktop';
  variant: 'regular' | 'password' | 'confirmPassword';
} & ComponentProps<'input'>;

export const Input = ({ className, responsive, variant }: InputPropTypes) => {
  const { showPassword, handlePasswordVisibility } = useGlobalContext();

  return (
    <>
      <If condition={variant === 'regular'}>
        <input
          className={`${
            responsive === 'mobile' ? 'input-mobile' : 'input-desktop'
          } ${className}`}
        />
      </If>

      <If condition={variant === 'password'}>
        <input
          className={`${
            responsive === 'mobile' ? 'input-mobile' : 'input-desktop'
          } ${className}`}
          type={showPassword ? 'text' : 'password'}
        />

        <div
          className='absolute top-8 right-3'
          onClick={handlePasswordVisibility}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </div>
      </If>

      <If condition={variant === 'confirmPassword'}>
        <input
          className={`${
            responsive === 'mobile' ? 'input-mobile' : 'input-desktop'
          } ${className}`}
          type='password'
        />
      </If>
    </>
  );
};
