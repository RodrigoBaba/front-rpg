import { CharacterModel } from "./CharacterModel";

export class AttributeModel{
    public id: number;
    public magicDamage: number;
    public physicalDamage: number;
    public defense: number;
    public character: CharacterModel;
}