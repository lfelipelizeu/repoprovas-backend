/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('professors')
export default class ProfessorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
