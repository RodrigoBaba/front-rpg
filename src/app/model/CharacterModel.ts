import { AttributeModel } from "./AttributeModel";
import { User } from "./User";

export class CharacterModel{
    public id: number;
    public vocation: string;
    public race: string;
    public user: User;
    public attribute: AttributeModel;
}