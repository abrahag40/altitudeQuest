export interface Component {
  name: string;
}

export class PositionComponent {
  constructor(
    public x: number = 0,
    public y: number = 0
  ) {}
}
