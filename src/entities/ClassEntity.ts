/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('classes')
export default class ClassEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subject_id: number;

    @Column()
    professor_id: number;
}
