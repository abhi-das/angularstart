System.register(['@angular/core', './artist.info.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, artist_info_service_1;
    var ArtistInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_info_service_1_1) {
                artist_info_service_1 = artist_info_service_1_1;
            }],
        execute: function() {
            ArtistInfoComponent = (function () {
                function ArtistInfoComponent(_arInfoSrv) {
                    this._arInfoSrv = _arInfoSrv;
                }
                ArtistInfoComponent.prototype.showArBio = function (ar) {
                    this.arName = ar.name;
                    this.arInfo = this._arInfoSrv.getArInfoById(ar.id)[0];
                    this.arBio = this.arInfo.bio;
                    // console.log("Child Method worked!!   ", ar.name);
                    // console.log( this.arInfo.bio );
                };
                ArtistInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'artist-into',
                        templateUrl: './partials/artist-info.html'
                    }), 
                    __metadata('design:paramtypes', [artist_info_service_1.ArtistInfoService])
                ], ArtistInfoComponent);
                return ArtistInfoComponent;
            }());
            exports_1("ArtistInfoComponent", ArtistInfoComponent);
        }
    }
});
//# sourceMappingURL=artist.info.component.js.map