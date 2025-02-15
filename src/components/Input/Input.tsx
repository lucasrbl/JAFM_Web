import { ComponentProps } from 'react';
import { If } from '../If/If';
import { EyeOff, Eye } from 'lucide-react';
import { usePasswordVisibility } from '@/hooks/usePasswordVisibility';

type InputPropTypes = {
  className?: string;
  device: 'mobile' | 'desktop';
  variant: 'regular' | 'password' | 'confirmPassword';
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  name: string;
} & ComponentProps<'input'>;

export const Input = ({
  className,
  device,
  variant,
  onChange,
  name,
}: InputPropTypes) => {
  const { handlePasswordVisibility, showPassword } = usePasswordVisibility();

  const isMobile = device === 'mobile' ? 'input-mobile' : 'input-desktop';

  return (
    <>
      <If condition={variant === 'regular'}>
        <input
          className={`${isMobile} ${className}`}
          onChange={onChange}
          name={name}
        />
      </If>

      <If condition={variant === 'password'}>
        <input
          className={`${isMobile} ${className}`}
          type={showPassword ? 'text' : 'password'}
          onChange={onChange}
          name={name}
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
          className={`${isMobile} ${className}`}
          type='password'
          onChange={onChange}
          name={name}
        />
      </If>
    </>
  );
};
