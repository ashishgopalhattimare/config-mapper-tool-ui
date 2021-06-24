export class EditorType {

  constructor(private _name: string, private _title: string) {
  }

  get name(): string {
    return this._name;
  }
  get title(): string {
    return this._title;
  }
}
