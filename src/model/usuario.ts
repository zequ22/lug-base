import { prop } from "@typegoose/typegoose";

class Userclass{
    @prop()
    public name?:string;
    public username?:string;
    public password?:string;
}