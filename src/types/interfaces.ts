import React from 'react';

export interface IBirdingHuData {
    source: string;
    details: string;
    webId: number;
    date: string;
    speciesHun?: string;
    speciesSci?: string;
    individuals: number;
    locality?: string;
    county: string;
    area?: string;
    observers: string[];
    uploader: string;
    notes?: string;
    longitude: number;
    latitude: number;
    imageLink?: string;
}

export interface IBirdingHuGalleryElementBase {
    id: string;
    author: string;
    source: string;
    speciesHun?: string;
    speciesSci?: string;
    date: string;
    locality?: string;
    area?: string;
    notes?: string;
    smallImageLink: string;
    detailsUrl: string;
}

export interface IBirdingHuGalleryElement extends IBirdingHuGalleryElementBase {
    cameraType?: string;
    cameraSettings?: string[];
    imageLink: string;
}

export interface IScreen {
    title?: string;
    children: React.ReactNode;
}

export interface IGlareolaButton {
    onPress: () => any;
    iconName: string;
    size?: number;
    color?: string;
    accessibilityLabel: string;
}

export interface IFetchInformation {
    isLoading: boolean;
    error: string;
}

export interface IObservationListData extends IFetchInformation {
    url: string;
    data?: IBirdingHuData[];
}

export interface IGalleryListData extends IFetchInformation {
    data?: IBirdingHuGalleryElement[];
}

export interface IObservationListProps {
    url: string;
}

export interface IFontStyle {
    fontSize: number;
    fontWeight?: '300' | '500' | '700' | '900' | 'normal' | 'bold' | '100' | '200' | '400' | '600' | '800';
}
