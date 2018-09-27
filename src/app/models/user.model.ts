import { Drink } from './drink.model';

export class User {
    name: string;
    points: number;
    drink: Drink;
    isVolunteer: boolean;

    constructor(name: string) {
        this.name = name;
        this.points = 100;
    }
}
