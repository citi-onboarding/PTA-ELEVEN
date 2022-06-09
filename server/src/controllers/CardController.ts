import { Request, Response } from 'express';
import { Card } from '@models/Card';
import { Citi, Crud } from '../global'

export default class CardController implements Crud{
    
    async create(request: Request, response: Response){
        const {foto, nomeParticipante, instagramParticipante} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(foto, nomeParticipante, instagramParticipante);

        if(isAnyUndefined){
            return response.status(400).send();
        }

        const newCard = {foto,nomeParticipante, instagramParticipante};
        const {httpStatus, message} = await Citi.insertIntoDatabase(Card, newCard);

        return response.status(httpStatus).send({message});
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Card);
        return response.status(httpStatus).send(values);
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { foto, nomeParticipante, instagramParticipante } = request.body;
         
        const isAnyUndefined = Citi.areValuesUndefined(foto, nomeParticipante, instagramParticipante, id);
        if(isAnyUndefined) return response.status(400).send();

        const CardWithUpdatedValues = { foto, nomeParticipante, instagramParticipante };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Card, id, CardWithUpdatedValues);

        return response.status(httpStatus).send({ messageFromUpdate });
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: cardFound, message } = await Citi.findByID(Card, id);
        
        if(!cardFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Card, cardFound);

        return response.status(httpStatus).send({ messageFromDelete });
    }
}