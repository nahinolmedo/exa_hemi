import { Component,OnInit} from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes:Heroe[]=[];

  constructor  (private _heroesService:HeroesService, private router:Router){

  }

  verHeroe(idx : number){
    console.log(idx);
    this.router.navigate(['./heroe', idx])
  }
  ngOnInit():void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);

  }

  

}
