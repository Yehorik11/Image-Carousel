import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const BaseButton = ({ children, className, ...props }: BaseButtonProps) => {
  return (
    <button className={`${styles.navButton} ${className || ''}`} {...props}>
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {children}
      </svg>
    </button>
  );
};

export const PrevButton = (props: Omit<BaseButtonProps, 'children'>) => {
  return (
    <BaseButton aria-label='Previous' {...props}>
      <path d='M15 18l-6-6 6-6' />
    </BaseButton>
  );
};

export const NextButton = (props: Omit<BaseButtonProps, 'children'>) => {
  return (
    <BaseButton aria-label='Next' {...props}>
      <path d='M9 18l6-6-6-6' />
    </BaseButton>
  );
};
