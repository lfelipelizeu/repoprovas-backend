/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tests')
export default class TestEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category_id: number;

    @Column()
    class_id: number;

    @Column()
    link: string;
}
