import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';
@Entity()
export class Atleta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  dni: number;

  @Column()
  nombre: string;

  @Column()
  tiempo: string;

  @Column()
  posicion: number;

  @Column()
  ciudadId: number;

  @ManyToOne(() => Ciudad, ciudad => ciudad.atletas, { eager: true })
  ciudad: Ciudad;
}
