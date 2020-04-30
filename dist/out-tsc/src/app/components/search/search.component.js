import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SearchComponent = class SearchComponent {
    constructor(_heroesService, _activatedRoute) {
        this._heroesService = _heroesService;
        this._activatedRoute = _activatedRoute;
        this.heroes = [];
    }
    ngOnInit() {
        this._activatedRoute.params.subscribe(params => {
            this.heroes = this._heroesService.findHeroes(params['word']);
            console.log(this.heroes);
        });
    }
};
SearchComponent = __decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html'
    })
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map