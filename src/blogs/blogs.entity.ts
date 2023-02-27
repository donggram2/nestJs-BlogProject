import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { CommonEntity } from '../common/entities/common.entity' // ormconfig.json에서 파싱 가능하도록 상대 경로로 지정
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm'
import { Exclude } from 'class-transformer'
import { UserEntity } from 'src/users/users.entity'

@Entity({
  name: 'BLOG',
}) // BLOG : 테이블 명
export class BlogEntity extends CommonEntity {
  @Column({ type: 'varchar', unique: true, nullable: false })
  title: string

  @Column({ type: 'varchar', nullable: true })
  description: string

  @Column({ type: 'text', nullable: true })
  contents: string
  //* Relation */
  @ManyToOne(() => UserEntity, (author: UserEntity) => author.blogs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    {
      name: 'author_id',
      referencedColumnName: 'id',
    },
  ])
  author: UserEntity
}

/*
const author = await User.findOne( { id: '...' } )
author.blogs.push(new BlogEntity(...))
await author.save()
*/
