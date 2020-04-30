import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    findHero(word) {
        this._router.navigate(['/search', word]);
        console.log(word);
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html'
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map