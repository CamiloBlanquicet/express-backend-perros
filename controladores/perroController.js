import mongoose from "mongoose";
import MascotaSchema from "../modelos/perroModel.js";

const Perro = mongoose.model('Perro', MascotaSchema)



export const addPerros  = (request, response) => {
    
    let p = new Perro(request.body);
    p.save((error, p) => {
            if (error) {
                respone.send(error);
            } else {
                response.json(p);
            }
        })
}


export const getPerros = (request, response) =>{
    Perro.find({} , (error, p) => {
            if (error) {
                respone.send(error);
            } else {
                response.json(p);
            }
        })
}

export const getPerroById = (request , response) =>{
    Perro.findById(request.params.perroid,(error, p)=>{
        if(error){
            response.send(error);
        }else{
            response.json(p);
        }
    })
}

export const upDatePerro = (request,response) => {
    Perro.findOneAndUpdate({ _id : request.params.perroid},
        request.body,
        {
            new:true
        },(error, p) =>{if(error){
            response.send(error);
        }else{
            response.json(p);
        }
    }
    )
}

export const deletePerroById = (request, response) =>{
    Perro.deleteOne({ _id : request.params.perroid},(error, p)=>{
        if(error){
            response.send(error);
        }else{
            response.json(p);
        }
    })
}
