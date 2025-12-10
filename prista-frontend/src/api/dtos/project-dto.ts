export class Project {
  id : number;
  name: string;
  clientId: number;
  
  constructor(src : Partial<Project | null>){
    this.id = src?.id ?? 0;
    this.name = src?.name ?? "";
    this.clientId = src?.clientId ?? 0;
  }
}