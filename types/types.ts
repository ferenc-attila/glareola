export interface IBirdingHuData {
        id: number;
        date: string,
        speciesHun: string,
        speciesSci: string,
        individuals: number,
        locality: string,
        county: string,
        area: string,
        observers: string[],
        uploader: string,
        notes: string,
        longitude: number,
        latitude: number,
        imageLink?: string,
}
