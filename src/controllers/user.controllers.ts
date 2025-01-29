import { Response, Request } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const Product = await User.findAll();
    // only gets use this form
    res.json(Product);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const Product = await User.findByPk(id);
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

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    firstName,
    Email,
    lastName,
    password,
    role,
    avatar,
    phone,
    addressId,
    isActive,
    CC,
    birthday,
    gender,
    country,
    city,
  } = req.body;

  try {
    const newProduct = await User.create({
      firstName: firstName,
      Email: Email,
      lastName: lastName,
      password: password,
      role: role,
      avatar: avatar,
      phone: phone,
      addressId: addressId,
      isActive: isActive,
      CC: CC,
      birthday: birthday,
      gender: gender,
      country: country,
      city: city,
    });
    res.json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const body = req.body;

  try {
    let ShoppingCarts = await User.findByPk(id);
    if (ShoppingCarts !== null && ShoppingCarts !== undefined) {
      ShoppingCarts = { ...body };

      await ShoppingCarts?.save();

      res.json(ShoppingCarts);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    await User.destroy({
      where: {
        id: id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
