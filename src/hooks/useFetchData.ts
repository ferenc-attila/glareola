import { useEffect, useState } from 'react';

import i18n from '../localization';
import { IBirdingHuData, IObservationListData } from '../types/interfaces';
import BirdingHuExtractor from '../utils/crawler/birdingHu/birdingHuExtractor';

export const useFetchData = (url: string) => {
    const dataCrawler = new BirdingHuExtractor(url);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([] as IBirdingHuData[]);

    useEffect(() => {
        setIsLoading(true);
        dataCrawler
            .getData()
            .then(response => {
                setData(response as IBirdingHuData[]);
                setIsLoading(false);
            })
            .catch(() => {
                setError(i18n.t('MESSAGE_ERROR_NETWORK'));
                setIsLoading(false);
            });
    }, [url]);

    return { isLoading, error, data } as IObservationListData;
};
