import { Response, Request } from "express";
import ShoppingCart from "../models/shoppingCart";

export const getShoppingCarts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const Product = await ShoppingCart.findAll();
    // only gets use this form
    res.json(Product);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

export const getShoppingCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const Product = await ShoppingCart.findByPk(id);
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

export const createShoppingCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { products } = req.body;

  try {
    const newProduct = await ShoppingCart.create({
      products: products,
    });
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const updateShoppingCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { products } = req.body;

  try {
    const ShoppingCarts = await ShoppingCart.findByPk(id);
    if (ShoppingCarts !== null && ShoppingCarts !== undefined) {
      ShoppingCarts.products = products;

      await ShoppingCarts.save();

      res.json(ShoppingCarts);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteShoppingCart = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    await ShoppingCart.destroy({
      where: {
        id: id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
