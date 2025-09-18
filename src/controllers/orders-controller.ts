import { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../database/prisma";

export class OrdersController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      description: z.string(),
    });

    const { description } = bodySchema.parse(request.body);

    const order = await prisma.order.create({
      data: { description },
    });

    return response.status(201).json({ order });
  }

  async index(request: Request, response: Response) {
    const paramsSchema = z.object({
      description: z.string().optional(), // deixa opcional para listar tudo se não passar nada
    });

    const { description } = paramsSchema.parse(request.query);

    const orders = await prisma.order.findMany({
      where: description
        ? {
            description: {
              contains: description, // equivalente a %name%
              mode: "insensitive", // ignora maiúsculas/minúsculas
            },
          }
        : undefined, // se não vier name, retorna todos
    });

    return response.status(200).json(orders);
  }
}
