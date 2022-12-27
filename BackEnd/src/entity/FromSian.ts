import {
    Entity,
    PrimaryGeneratedColumn,
    Column
  } from "typeorm";
  
  @Entity()
  export class FromSian {
    
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    recipient: string;

    @Column()
    pwd : string;
    
    @Column()
    message : string;

    @Column({default : ()=>'CURRENT_TIMESTAMP'})
    createdAt : Date;
  }
  