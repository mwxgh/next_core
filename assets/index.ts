import user_image from './user-image.png'
import logo from './logo.png'
import ts from './languages/ts.png'
import js from './languages/js.png'
import php from './languages/php.png'
import python from './languages/python.png'
import java from './languages/java.png'
import golang from './languages/golang.png'
import django from './frameworks/django.png'
import electronjs from './frameworks/electronjs.png'
import expressjs from './frameworks/expressjs.png'
import laravel from './frameworks/laravel.png'
import nestjs from './frameworks/nestjs.png'
import nextjs from './frameworks/nextjs.png'
import odoo from './frameworks/odoo.png'
import reactjs from './frameworks/reactjs.png'
import spring from './frameworks/spring.png'
import mongodb from './databases/mongodb.png'
import mssql from './databases/mssql.png'
import mysql from './databases/mysql.png'
import postgre from './databases/postgre.png'
import redis from './databases/redis.png'
import prisma from './orms/prisma.png'
import sequelize from './orms/sequelize.png'
import typeorm from './orms/typeorm.png'
import mongoose from './orms/mongoose.png'
import jest from './unittests/jest.png'
import vitest from './unittests/vitest.png'
import joi from './validations/joi.png'
import zod from './validations/zod.png'
import aws from './others/aws.png'
import docker from './others/docker.png'
import kafka from './others/kafka.png'
import figma from './others/figma.png'

export const assets = {
  user_image,
  logo,
  // languages
  ts,
  js,
  php,
  python,
  java,
  golang,
  // frameworks
  django,
  electronjs,
  expressjs,
  laravel,
  nestjs,
  nextjs,
  odoo,
  reactjs,
  spring,
  // databases
  mongodb,
  mssql,
  mysql,
  postgre,
  redis,
  // orms
  prisma,
  sequelize,
  typeorm,
  mongoose,
  // unit test
  jest,
  vitest,
  // validations
  joi,
  zod,
  // other
  aws,
  docker,
  figma,
  kafka,
}

export const testimonials = [
  {
    quote: 'Languages',
    images: [
      assets.ts,
      assets.js,
      assets.python,
      assets.java,
      assets.php,
      // assets.golang,
    ],
  },
  {
    quote: 'Frameworks',
    images: [
      assets.nestjs,
      assets.expressjs,
      assets.reactjs,
      assets.nextjs,
      assets.electronjs,
      assets.django,
      assets.spring,
      assets.laravel,
      assets.odoo,
    ],
  },
  {
    quote: 'Databases',
    images: [
      assets.mysql,
      assets.postgre,
      assets.mssql,
      assets.redis,
      assets.mongodb,
    ],
  },
  {
    quote: 'Orm tools',
    images: [assets.prisma, assets.typeorm, assets.sequelize, assets.mongoose],
  },
  {
    quote: 'Validation & Unittesting',
    images: [assets.joi, assets.zod, assets.jest, assets.vitest],
  },
  {
    quote: 'Other',
    images: [assets.aws, assets.docker, assets.figma, assets.kafka],
  },
]
