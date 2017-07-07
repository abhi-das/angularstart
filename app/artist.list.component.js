System.register(['@angular/core', './artist.info.component', './artist.list.service'], function(exports_1, context_1) {
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
    var core_1, artist_info_component_1, artist_list_service_1;
    var ArtistListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (artist_info_component_1_1) {
                artist_info_component_1 = artist_info_component_1_1;
            },
            function (artist_list_service_1_1) {
                artist_list_service_1 = artist_list_service_1_1;
            }],
        execute: function() {
            ArtistListComponent = (function () {
                function ArtistListComponent(_arListSrv) {
                    this._arListSrv = _arListSrv;
                }
                ArtistListComponent.prototype.ngOnInit = function () {
                    this.arDisplayList = this._arListSrv.getArList();
                };
                ArtistListComponent.prototype.showArtistInfoFn = function (ar) {
                    this.currentAr = ar;
                    // console.log(ar.id);
                    this.artistInfoChild.showArBio(this.currentAr);
                    // this.artistInfoChild.childMethodTrace();
                };
                __decorate([
                    core_1.ViewChild(artist_info_component_1.ArtistInfoComponent), 
                    __metadata('design:type', artist_info_component_1.ArtistInfoComponent)
                ], ArtistListComponent.prototype, "artistInfoChild", void 0);
                ArtistListComponent = __decorate([
                    core_1.Component({
                        selector: 'artist-list',
                        templateUrl: './partials/artist-list.html'
                    }), 
                    __metadata('design:paramtypes', [artist_list_service_1.ArtistListService])
                ], ArtistListComponent);
                return ArtistListComponent;
            }());
            exports_1("ArtistListComponent", ArtistListComponent);
        }
    }
});
//# sourceMappingURL=artist.list.component.js.map