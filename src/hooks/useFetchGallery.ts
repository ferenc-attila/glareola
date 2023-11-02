import { useEffect, useState } from 'react';

import i18n from '../localization';
import { IBirdingHuGalleryElement, IGalleryListData } from '../types/interfaces';
import BirdingHuExtractor from '../utils/crawler/birdingHu/birdingHuExtractor';

export const useFetchGallery = (url: string) => {
    const crawler = new BirdingHuExtractor(url);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([] as IBirdingHuGalleryElement[]);

    useEffect(() => {
        setIsLoading(true);
        crawler
            .getGallery()
            .then(response => {
                setData(response as IBirdingHuGalleryElement[]);
                setIsLoading(false);
            })
            .catch(() => {
                setError(i18n.t('MESSAGE_ERROR_NETWORK'));
                setIsLoading(false);
            });
    }, [url]);

    return { isLoading, error, data } as IGalleryListData;
};
