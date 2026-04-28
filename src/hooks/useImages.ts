import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../api/fetchData';
import type { Image } from '../types/image';

const useImages = () => {
  return useQuery({
    queryKey: ['images'],
    queryFn: () => fetchData<Image[]>('https://picsum.photos/v2/list'),
  });
};

export { useImages };
