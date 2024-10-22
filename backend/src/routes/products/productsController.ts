import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("listProducts");
}

export function getProudctById(req: Request, res: Response) {
  res.send("getProudctById");
}

export function createProduct(req: Request, res: Response) {
  res.send("createProduct");
}

export function updateProduct(req: Request, res: Response) {
  res.send("updateProduct");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("deleteProduct");
}