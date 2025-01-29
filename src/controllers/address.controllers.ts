import { Response, Request } from "express";
import Addresses from "../models/addresses";

export const getAddresses = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const Address = await Addresses.findAll();
    res.json(Address);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

export const getAddress = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const Address = await Addresses.findByPk(id);
    if (Address === null || Address === undefined) {
      res.status(404).json({ message: "Address not found" });
      return;
    }
    res.json(Address);
    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};

export const createAddress = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { address, city, state, country, postalCode } = req.body;

  try {
    const newAddress = await Addresses.create({
      address: address,
      city: city,
      state: state,
      country: country,
      postalCode: postalCode
    });
    res.json(newAddress);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const updateAddress = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { address, city, state, country, postalCode } = req.body;

  try {
    const Address = await Addresses.findByPk(id);
    if (Address !== null && Address !== undefined) {
        Address.address = address;
        Address.city = city;
        Address.state = state;
        Address.country = country;
        Address.postalCode = postalCode;

      await Address.save();

      res.json(Address);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteAddress = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    console.log(id, 'xd');

    const Address = await Addresses.destroy({
      where: {
        id: id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
