import { useImages } from '../../hooks/useImages';
import { Carousel } from '../Carousel';
import { GalleryControls } from '../GalleryControls';
import { Title } from '../Title';

import styles from './AppLayout.module.css';

const AppLayout = () => {
  const { data, isLoading, error } = useImages();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  console.log(data);
  return (
    <div className={styles.appLayout}>
      <div className={styles.galleryHeader}>
        <Title>Image Carousel</Title>
        <GalleryControls />
      </div>
      <Carousel images={data} />
    </div>
  );
};

export { AppLayout };
