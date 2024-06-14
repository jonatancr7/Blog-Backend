
import { app } from "./app.js";
import { sequelize } from "./src/DataBase/configDB.js";
import { PORT } from "./src/utils/env.js";
/*import { comments } from "./src/utils/Comments/Model.js";*/


//importa tus modelos

const main = async () => {
  try {
  sequelize.sync({ force: true }); //genera todos los modelos
    app.listen(PORT, () => {
      console.log(
        `server listen on port: ${PORT},`,
        "url: http://localhost:4000"
      );
    });
    //sequelize.authenticate();
  } catch (err) {
    console.log(err);
  }
};

main(); //execute the proyect
