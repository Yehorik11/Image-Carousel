import styles from './GalleryControls.module.css';

interface GalleryControlsProps {
  children?: React.ReactNode;
}

const GalleryControls = ({ children }: GalleryControlsProps) => {
  return (
    <div className={styles.controls}>
      <span className={styles.arrows}>← →</span>
      <span className={styles.text}> to navigate · click to select</span>
      {children}
    </div>
  );
};

export { GalleryControls };
