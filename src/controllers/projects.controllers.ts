import { Response, Request } from "express";
import Products from "../models/products";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const Product = await Products.findAll();
    // only gets use this form
    res.json(Product);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

export const getProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const Product = await Products.findByPk(id);
    if (Product === null || Product === undefined) {
      // only gets use this method
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.json(Product);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, priority, description } = req.body;

  try {
    const newProduct = await Products.create({
      name: name,
      priority: priority,
      description: description,
    });
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    const Product = await Products.findByPk(id);
    if (Product !== null && Product !== undefined) {
      Product.name = name;
      Product.priority = priority;
      Product.description = description;

      await Product.save();

      res.json(Product);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    console.log(id);

    const Product = await Products.destroy({
      where: {
        id: id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
