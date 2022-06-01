import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    foto: string

    @Column()
    nomeParticipante: string

    @Column()
    descricaoParticipante: string
}