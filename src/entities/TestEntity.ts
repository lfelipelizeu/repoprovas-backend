/* eslint-disable import/no-unresolved */
/* eslint-disable indent */
import {
 Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn,
} from 'typeorm';
import ClassEntity from './ClassEntity';
import CategoryEntity from './CategoryEntity';

@Entity('tests')
export default class TestEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    link: string;

    @OneToOne(() => ClassEntity, { eager: true })
    @JoinColumn({ name: 'class_id' })
    class: ClassEntity;

    @OneToOne(() => CategoryEntity, { eager: true })
    @JoinColumn({ name: 'category_id' })
    category: CategoryEntity;

    formatTest() {
        return {
            id: this.id,
            name: this.name,
            link: this.link,
            subjectName: this.class.subject.name,
            subjectPeriod: this.class.subject.period,
            professor: this.class.professor.name,
            category: this.category.name,
        };
    }
}
