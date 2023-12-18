
import { MisProductos } from "../mock/data";

const pedirDatos = () => {
    
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(MisProductos);
          }, 500);
        });
      };

      export default pedirDatos