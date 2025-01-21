import app from "./app";
// import sequelize from "./database/database";
// import model from "./models";
require("dotenv").config();

// sequelize.addModels(model);

async function main() {
  try {
    const PORT = process.env.PORT || 3000; // Asegúrate de usar el puerto desde variables de entorno o un valor por defecto
    // await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      if(PORT === '3000') {
        console.log(`Server running on port ${PORT}`);
      } else {
        console.log(`el puerto 3000 esta ocupado pero el Server running on port ${PORT}`);
      }
      // Muestra el puerto correcto
    });
    app.get("/", (req, res) => {
      res.send("Server is running!");
    });
  } catch (error) {
    console.error("Error while starting the server:", error);
  }
}

main();