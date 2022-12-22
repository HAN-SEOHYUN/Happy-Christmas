import {
    Entity,
    PrimaryGeneratedColumn,
    Column
  } from "typeorm";
  
  //각 데코레이션의 의미 !
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
  