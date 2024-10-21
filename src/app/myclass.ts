import { v4 as uuidv4 } from 'uuid';
const shortUuid = uuidv4().substring(0, 5).toUpperCase();

export class myClass{


    id:any
    name:string
    gender:string
    age:any
    date?: any
    mobile:any
    address:string
    diagnosis:string
    pid:string
    prescription:string
    prescription2:string
    prescription3:string

    constructor(){
        this.id=""
        this.gender=""
        this.name=""
        this.age=""
        this.date= new Date();
        this.mobile=""
        this.address=""
        this.diagnosis=""
        this.pid=shortUuid;
        this.prescription=""
        this.prescription2=""
        this.prescription3=""
    }
}