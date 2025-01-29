import { Response, Request } from "express";
import Stores from "../models/stores";

export const getStores = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const Store = await Stores.findAll();
    res.json(Store);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

export const getStore = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const Store = await Stores.findByPk(id);
    if (Store === null || Store === undefined) {
      res.status(404).json({ message: "Store not found" });
      return;
    }
    res.json(Store);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

export const createStore = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, logo, phone, email } = req.body;

  try {
    const newStore = await Stores.create({
        name: name,
        logo: logo,
        phone: phone,
        email: email,
    });
    res.json(newStore);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const updateStore = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { name, logo, phone, email } = req.body;

  try {
    const Store = await Stores.findByPk(id);
    if (Store !== null && Store !== undefined) {
        Store.name = name;
        Store.logo = logo;
        Store.phone = phone;
        Store.email = email;

      await Store.save();

      res.json(Store);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteStore = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    console.log(id, 'xd');

    const Address = await Stores.destroy({
      where: {
        id: id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
