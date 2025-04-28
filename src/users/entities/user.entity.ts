import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  firstname: string;
  @Column({ length: 200 })
  lastname: string;

  @Column({ length: 200, default: null })
  password: string;

  @Column({ length: 100, default: null })
  passwordSalt: string;

  @Column({ length: 100, nullable: true })
  email: string;

  @Column({ unique: true, length: 12 })
  mobile: string;
  @Column({ length: 12, nullable: true })
  phone_code: string;

  @Column({ type: 'text', nullable: true, default: null })
  username: string;

  @Column({ length: 5, nullable: true, default: null })
  language: string;

  @Column({ nullable: true })
  verification_token: string;

  @Column({ type: 'bool', nullable: true })
  is_verified: boolean;

  @Column({ type: 'bool', nullable: true })
  is_mobile_verified: boolean;

  @Column({ type: 'bool', default: false })
  is_password_emtpty: boolean;

  @Column({ type: 'bool', default: false })
  from_Joomla: boolean;

  @Column({ nullable: true })
  resetpassword_token: string;

  @Column({ type: 'bool', default: true })
  status: boolean;
}
