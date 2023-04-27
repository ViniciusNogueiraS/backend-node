//DEFINE OS SERVIÇOS E SE COMUNICA COM O BANCO DE DADOS
import { PrismaClient, DB_Product } from '@prisma/client'
import Product from './product-model'

const prisma = new PrismaClient()

export function getOne(id: string): Promise<DB_Product | null> {
    
  return new Promise((resolve, reject) => {

    return prisma.dB_Product.findUnique({
      where: {id: parseInt(id)}
    })
    .then(async (product) => {
      await prisma.$disconnect()
      resolve(product)
    })
    .catch(async (e: Error) => {
      await prisma.$disconnect()
      reject(e)
    })
    
  })
}

export function getAll(): Promise<DB_Product[] | null> {
    
  return new Promise((resolve, reject) => {

    return prisma.dB_Product.findMany()
    .then(async (products) => {
      await prisma.$disconnect()
      resolve(products)
    })
    .catch(async (e: Error) => {
      await prisma.$disconnect()
      reject(e)
    })

  })
}

export function post(product: Product): Promise<DB_Product | null> {
    
  return new Promise((resolve, reject) => {

    return prisma.dB_Product.create({
      data: {
        name: product.name,
        price: product.price
      }
    })
    .then(async (product) => {
      await prisma.$disconnect()
      resolve(product)
    })
    .catch(async (e: Error) => {
      await prisma.$disconnect()
      reject(e)
    })

  })
}

export function update(product: Product): Promise<DB_Product | null> {
    
  return new Promise((resolve, reject) => {

    return prisma.dB_Product.update({
      where: {id: parseInt(product.id+'s')},
      data: {
        name: product.name,
        price: product.price
      }
    })
    .then(async (product) => {
      await prisma.$disconnect()
      resolve(product)
    })
    .catch(async (e: Error) => {
      await prisma.$disconnect()
      reject(e)
    })

  })
}

export function remove(id: string): Promise<DB_Product | null> {
    
  return new Promise((resolve, reject) => {

    return prisma.dB_Product.delete({
      where: {id: parseInt(id)}
    })
    .then(async (product) => {
      await prisma.$disconnect()
      resolve(product)
    })
    .catch(async (e: Error) => {
      await prisma.$disconnect()
      reject(e)
    })

  })
}