import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../database/prisma";

export class FishsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string(),
      scientificName: z.string(),
      image: z.string().url(),
      minTankSize: z.coerce.number().positive(),
      temperament: z.string(),
      diet: z.string(),
      waterParameters: z.object({
        ph: z.string(),
        temp: z.string(),
        gh: z.string(),
      }),
      description: z.string(),
      compatibleTankmates: z.array(z.string()),
      price: z.coerce.number().positive(),
    });

    const {
      name,
      scientificName,
      image,
      minTankSize,
      temperament,
      diet,
      waterParameters,
      description,
      compatibleTankmates,
      price,
    } = bodySchema.parse(request.body);

    const fish = await prisma.fish.create({
      data: {
        name,
        scientificName,
        image,
        minTankSize,
        temperament,
        diet,
        waterParameters,
        description,
        compatibleTankmates,
        price,
      },
    });

    return response.status(201).json(fish);
  }

  async index(request: Request, response: Response) {
    const paramsSchema = z.object({
      name: z.string().optional(), // deixa opcional para listar tudo se não passar nada
    });

    const { name } = paramsSchema.parse(request.query);

    const orders = await prisma.fish.findMany({
      where: name
        ? {
            description: {
              contains: name, // equivalente a %name%
              mode: "insensitive", // ignora maiúsculas/minúsculas
            },
          }
        : undefined, // se não vier name, retorna todos
    });

    return response.status(200).json(orders);
  }
}
