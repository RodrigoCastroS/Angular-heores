import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeroesComponent = class HeroesComponent {
    constructor(_heroesService, _router) {
        this._heroesService = _heroesService;
        this._router = _router;
        this.heroes = [];
        console.log("constructor");
    }
    ngOnInit() {
        this.heroes = this._heroesService.getHeroes();
        // console.log(this.heroes);
    }
    seeHero(index) {
        this._router.navigate(['/hero', index]);
        console.log(index);
    }
};
HeroesComponent = __decorate([
    Component({
        selector: 'app-heroes',
        templateUrl: './heroes.component.html'
    })
], HeroesComponent);
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map