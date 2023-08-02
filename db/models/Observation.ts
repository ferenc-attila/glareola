import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'observations'})
export class Observation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    source: string;

    @Column({type: 'integer'})
    webId: number;

    @Column({type: 'date'})
    date: string;

    @Column({type: 'varchar', length: 255, nullable: true})
    speciesSci: string;

    @Column({type: 'integer'})
    individuals: number;

    @Column({type: 'text'})
    locality: string;

    @Column({type: 'varchar', length: 255})
    county: string;

    @Column({type: 'text'})
    area: string;

    @Column({type: 'text'})
    observers: string[];

    @Column({type: 'varchar', length: 255})
    uploader: string;

    @Column({type: 'text'})
    notes: string;

    @Column({type: 'double'})
    longitude: number;

    @Column({type: 'double'})
    latitude: number;

    @Column({type: 'text'})
    imageLink: string;
}
