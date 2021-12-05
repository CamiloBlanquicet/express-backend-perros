import mongoose  from "mongoose";


const Schema = mongoose.Schema;

const PerroSchema = new Schema({
    raza :{
        type: String,
        required : "Ingrese raza"
    },
    foto: {
        type: String,
        required : "Ingrese direccion de imagen"
    },
    nombre : {
        type : String,
        required : "Ingrese raza"

    },
    edad:{
        type : String,
    }
})
export default PerroSchema;