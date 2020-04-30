import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeroComponent = class HeroComponent {
    constructor(activatedRoute, _heroesService) {
        this.activatedRoute = activatedRoute;
        this._heroesService = _heroesService;
        this.hero = {};
        this.activatedRoute.params.subscribe(params => {
            this.hero = this._heroesService.getHero(params['id']);
            console.log(this.hero);
        });
    }
    getCasa(casa) {
        if (casa = "Marvel") {
            return this.hero.casa;
        }
    }
};
HeroComponent = __decorate([
    Component({
        selector: 'app-hero',
        templateUrl: './hero.component.html'
    })
], HeroComponent);
export { HeroComponent };
//# sourceMappingURL=hero.component.js.map