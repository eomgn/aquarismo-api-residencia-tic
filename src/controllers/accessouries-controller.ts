import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../database/prisma";

export class AccssouriesController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().min(3, "Insira um nome válido."),
      type: z.string(),
      price: z.coerce
        .number()
        .positive()
        .min(1, "Insira um valor maior que zero."),
      description: z.string(),
      mark: z.string(),
    });

    const { name, type, price, description, mark } = bodySchema.parse(
      request.body
    );

    const accessorie = await prisma.accessories.create({
      data: { name, type, price, description, mark },
    });

    return response.status(201).json(accessorie);
  }

  async index(request: Request, response: Response) {
    const paramsSchema = z.object({
      name: z.string().optional(), // deixa opcional para listar tudo se não passar nada
    });

    const { name } = paramsSchema.parse(request.query);

    const marks = await prisma.accessories.findMany({
      where: name
        ? {
            name: {
              contains: name, // equivalente a %name%
              mode: "insensitive", // ignora maiúsculas/minúsculas
            },
          }
        : undefined, // se não vier name, retorna todos
    });

    return response.status(200).json(marks);
  }
}
