export class Work {
    private _id: string;
    private _name: string;
    private _desc: string;
    private _date: Date;

    constructor() {
        this._id = "";
        this._name = "";
        this._desc = "";
        this._date = null;
    }

    get id(): string{
        return this._id
    }
    get name(): string{
        return this._name
    }
    get desc(): string{
        return this._desc
    }
    get date(): Date{
        return this._date
    }

    set id(id: string){
        this._id = id;
    }
    set name(name: string){
        this._name = name;
    }
    set desc(desc: string){
        this._desc = desc;
    }
    set date(date: Date){
        this._date = date;
    }
}
