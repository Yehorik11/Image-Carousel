import styles from './Button.module.css';

type ButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
};

const Button = ({ direction, onClick }: ButtonProps) => {
  const isLeft = direction === 'left';

  return (
    <button
      className={styles.navButton}
      onClick={onClick}
      aria-label={isLeft ? 'Previous' : 'Next'}
    >
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
        {isLeft ? <path d='M15 18l-6-6 6-6' /> : <path d='M9 18l6-6-6-6' />}
      </svg>
    </button>
  );
};

export { Button };
