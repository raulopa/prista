export class Project {
  name: string;
  clientId: number;
  
  constructor(src : Partial<Project | null>){
    this.name = src?.name ?? "";
    this.clientId = src?.clientId ?? 0;
  }
}