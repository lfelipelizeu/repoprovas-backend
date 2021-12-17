/* eslint-disable import/no-unresolved */
/* eslint-disable indent */
import {
 Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import ClassEntity from './ClassEntity';

@Entity('professors')
export default class ProfessorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => ClassEntity, (classItem) => classItem.subject)
    classes: ClassEntity;
}
