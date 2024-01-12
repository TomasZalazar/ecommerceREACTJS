
import MOCK_DATA from "../mock/data.json";

const pedirDatos = () => {
    
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(MOCK_DATA);
          }, 500);
        });
      };

      export default pedirDatos