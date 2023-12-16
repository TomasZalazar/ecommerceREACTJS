
import { MisProductos } from "../mock/data";

const pedirDatos = () => {
    
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(MisProductos);
          }, 1000);
        });
      };

      export default pedirDatos