import type { Image } from '../../types/image';
import { useCarousel } from '../../hooks/useCarousel';
import { Button } from '../Button';
import { SelectedImages } from '../SelectedImages/SelectedImages';

import styles from './Carousel.module.css';

const ITEM_WIDTH = 280;
const GAP = 16;

export const Carousel = ({ images }: { images: Image[] }) => {
  const {
    index,
    isTransitioning,
    selectedIds,
    toggleSelect,
    prev,
    next,
    extendedImages,
  } = useCarousel(images);

  if (!images.length) return null;

  const currentStep = (index % images.length) + 1;

  return (
    <div className={styles.wrapper}>
      <div className={styles.viewport}>
        <div
          className={`${styles.track} ${!isTransitioning ? styles.noTransition : ''}`}
          style={{
            transform: `translateX(calc(-1 * ${index} * (${ITEM_WIDTH}px + ${GAP}px)))`,
          }}
        >
          {extendedImages.map((img, i) => (
            <div
              key={`${img.id}-${i}`}
              className={`${styles.slide} ${selectedIds.has(img.id) ? styles.selected : ''}`}
              onClick={() => toggleSelect(img.id)}
            >
              <img src={img.download_url} alt={img.author} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.counter}>
          <span className={styles.current}>
            {String(currentStep).padStart(2, '0')}
          </span>
          <span className={styles.total}> / {images.length}</span>
        </div>

        <div className={styles.navButtons}>
          <Button direction='left' onClick={prev} />
          <Button direction='right' onClick={next} />
        </div>
      </div>

      <SelectedImages images={images} selectedIds={selectedIds} />
    </div>
  );
};
