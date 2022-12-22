import {
    Entity,
    PrimaryGeneratedColumn,
    Column
  } from "typeorm";
  
  @Entity()
  export class ToSian {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    sender: string;
    
    @Column()
    message : string;

    @Column({default : ()=>'CURRENT_TIMESTAMP'})
    createdAt : Date;
  }
  