import { AttributeModel } from "./AttributeModel";

export class CharacterModel{
    public id: number;
    public name: string;
    public gender: string;
    public vocation: string;
    public race: string;
    public attributeModel: AttributeModel;
}