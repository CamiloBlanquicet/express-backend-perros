import {addPerros, getPerros, getPerroById, upDatePerro,deletePerroById} from "../controladores/perroController.js";


const rutas = function(app){
    app.route('/perros')
             .get(getPerros) 
             .post(addPerros)

    
    
    app.route("/perros/:perroid")
             .get(getPerroById)
             .put(upDatePerro)
             .delete(deletePerroById)

            
};
export default rutas;