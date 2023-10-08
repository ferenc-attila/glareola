import React from 'react';

export interface IBirdingHuData {
    source: string;
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

export interface IScreen {
    title?: string;
    children: React.ReactNode;
}

export interface IGlareolaButton {
    onPress: () => any;
    iconName: string;
    size: number;
    color: string;
    accessibilityLabel: string;
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

export interface IFontStyle {
    fontSize: number;
    fontWeight?: '300' | '500' | '700' | '900' | 'normal' | 'bold' | '100' | '200' | '400' | '600' | '800';
}

export interface ITextStyle extends IFontStyle {
    color: string;
    padding?: number;
    margin?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
}
