import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { CommonEntity } from '../common/entities/common.entity' // ormconfig.json에서 파싱 가능하도록 상대 경로로 지정
import { Column, Entity, Index, JoinColumn, OneToMany, OneToOne } from 'typeorm'
import { Exclude } from 'class-transformer'

@Entity({
  name: 'VISITOR',
}) // BLOG : 테이블 명
export class VisitorEntity extends CommonEntity {
  //* Relation */
}

/*
const author = await User.findOne( { id: '...' } )
author.blogs.push(new BlogEntity(...))
await author.save()
*/
