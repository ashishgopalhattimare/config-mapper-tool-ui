import {Color} from './Color';

export class ProfileDataTO {
  file: File;
  name: string;
  dragDisabled: boolean;
  isCollapsed: boolean;
  color: Color;

  constructor(file: File, color: Color) {
    this.file = file;
    this.dragDisabled = false;
    this.isCollapsed = true;
    this.color = color;
    this.name = this.file.name;
  }

  // setColor(color: string): void {
  //   this.color = color;
  // }
}
