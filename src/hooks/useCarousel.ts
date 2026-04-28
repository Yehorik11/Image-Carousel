import { useState, useEffect } from 'react';
import type { Image } from '../types/image';

export const useCarousel = (images: Image[]) => {
  const count = images.length;
  const [index, setIndex] = useState<number>(count);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const extendedImages = [...images, ...images, ...images];

  const next = (): void => {
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const prev = (): void => {
    setIsTransitioning(true);
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (index >= count * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(count);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (index < count) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(count * 2 - 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [index, count]);

  const toggleSelect = (id: string): void => {
    setSelectedIds((prev) => {
      const nextSet = new Set(prev);
      if (nextSet.has(id)) {
        nextSet.delete(id);
      } else {
        nextSet.add(id);
      }
      return nextSet;
    });
  };

  return {
    index,
    isTransitioning,
    selectedIds,
    toggleSelect,
    prev,
    next,
    extendedImages,
  };
};
