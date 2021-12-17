/* eslint-disable import/no-unresolved */
/* eslint-disable indent */
import {
 Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import SubjectEntity from './SubjectEntity';
import ProfessorEntity from './ProfessorEntity';

@Entity('classes')
export default class ClassEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => SubjectEntity, (subject) => subject.id, { eager: true })
    @JoinColumn({ name: 'subject_id' })
    subject: SubjectEntity;

    @ManyToOne(() => ProfessorEntity, (professor) => professor.id, { eager: true })
    @JoinColumn({ name: 'professor_id' })
    professor: ProfessorEntity;
}
