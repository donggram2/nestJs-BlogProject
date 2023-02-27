import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { CommonEntity } from '../common/entities/common.entity' // ormconfig.json에서 파싱 가능하도록 상대 경로로 지정
import { Column, Entity, Index, JoinColumn, OneToMany, OneToOne } from 'typeorm'
import { Exclude } from 'class-transformer'

@Entity({
  name: 'USER_PROFILE',
}) // BLOG : 테이블 명
export class ProfileEntity extends CommonEntity {
  @Column({ type: 'varchar', nullable: true })
  bio: string

  @Column({ type: 'varchar', nullable: true })
  site: string
  //* Relation */
}

/*
const author = await User.findOne( { id: '...' } )
author.blogs.push(new BlogEntity(...))
await author.save()
*/
