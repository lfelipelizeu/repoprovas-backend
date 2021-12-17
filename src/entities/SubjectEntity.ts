/* eslint-disable import/no-unresolved */
/* eslint-disable indent */
import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import ClassEntity from './ClassEntity';

@Entity('subjects')
export default class SubjectEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    period: number;

    @OneToMany(() => ClassEntity, (classItem) => classItem.subject)
    classes: ClassEntity;
}
