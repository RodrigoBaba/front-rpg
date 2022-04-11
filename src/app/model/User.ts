import { CharacterModel } from "./CharacterModel";

export class User{
    public id: number;
    public user: string;
    public email: string;
    public password: string;
    public characterModel: CharacterModel;
}