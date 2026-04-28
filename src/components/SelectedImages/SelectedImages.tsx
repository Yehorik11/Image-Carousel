import type { Image } from '../../types/image';

import styles from './SelectedImages.module.css';

interface SelectedImagesProps {
  images: Image[];
  selectedIds: Set<string>;
}

const SelectedImages = ({ images, selectedIds }: SelectedImagesProps) => {
  const selectedPhotos = images.filter((img) => selectedIds.has(img.id));

  return (
    <div className={styles.selectionSection}>
      <div className={styles.selectionHeader}>
        <span className={styles.selectionTitle}>SELECTED IMAGES</span>
        <span className={styles.selectionBadge}>{selectedIds.size}</span>
      </div>

      <div className={styles.dropzone}>
        {selectedPhotos.length > 0 ? (
          <div className={styles.selectedGrid}>
            {selectedPhotos.map((img) => (
              <div key={img.id} className={styles.selectedItem}>
                <img src={img.download_url} alt='' className={styles.thumb} />
                <a
                  href={img.download_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.urlLink}
                >
                  {img.download_url}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.placeholder}>
            No images selected — click any photo in the carousel to add it here.
          </p>
        )}
      </div>
    </div>
  );
};

export { SelectedImages };
