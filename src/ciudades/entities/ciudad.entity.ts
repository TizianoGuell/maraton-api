import { Atleta } from "src/atletas/entities/atleta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ciudad {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    nombre:string;

    @OneToMany(()=>Atleta,atleta=>atleta.ciudad)
    atletas:Atleta[];
}
