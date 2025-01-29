import { Response, Request } from "express";
import Categories from "../models/categories";

export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const Category = await Categories.findAll();
    res.json(Category);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

export const getCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const Category = await Categories.findByPk(id);
    if (Category === null || Category === undefined) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.json(Category);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, subCategories, products } = req.body;

  try {
    const newCategory = await Categories.create({
        name: name,
        subCategories: subCategories,
        products: products,
    });
    res.json(newCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const {  name, subCategories, products } = req.body;

  try {
    const Category = await Categories.findByPk(id);
    if (Category !== null && Category !== undefined) {
        Category.name = name;
        Category.subCategories = subCategories;
        Category.products = products;

      await Category.save();

      res.json(Category);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    console.log(id, 'xd');

    const Address = await Categories.destroy({
      where: {
        id: id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
