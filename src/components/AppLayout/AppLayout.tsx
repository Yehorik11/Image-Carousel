import { useImages } from '../../hooks/useImages';
import { Carousel } from '../Carousel';
import { GalleryControls } from '../GalleryControls';
import { Spinner } from '../Spinner';
import { Title } from '../Title';

import styles from './AppLayout.module.css';

const AppLayout = () => {
  const { data, isLoading, error } = useImages();

  return (
    <div className={styles.appLayout}>
      <div className={styles.galleryHeader}>
        <Title>Image Carousel</Title>
        <GalleryControls />
      </div>

      <main className={styles.content}>
        {isLoading || error ? (
          <div className={styles.loaderWrapper}>
            <Spinner />
            {error && <p className={styles.errorText}>Failed to load images</p>}
          </div>
        ) : (
          data && <Carousel images={data} />
        )}
      </main>
    </div>
  );
};

export { AppLayout };
