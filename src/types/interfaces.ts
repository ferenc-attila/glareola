export interface IBirdingHuData {
    source: string;
    webId: number;
    date: string;
    speciesHun: string;
    speciesSci: string;
    individuals: number;
    locality: string;
    county: string;
    area: string;
    observers: string[];
    uploader: string;
    notes: string;
    longitude: number;
    latitude: number;
    imageLink?: string;
}

export interface IGlareolaButton {
    onPress: () => any;
    iconName: string;
    size: number;
    color: string;
    accessibilityLabel: string;
}

export interface IError {
    message: string;
    error?: Error;
}

export interface IObservationListData {
    url: string;
    isLoading: boolean;
    error: string;
    data?: IBirdingHuData[];
}

export interface IObservationListProps {
    url: string;
}
