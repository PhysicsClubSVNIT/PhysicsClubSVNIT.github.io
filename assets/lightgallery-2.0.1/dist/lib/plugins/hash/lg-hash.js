"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var lg_events_1 = require("../../lg-events");
var lg_hash_settings_1 = require("./lg-hash-settings");
var Hash = /** @class */ (function () {
    function Hash(instance, $LG) {
        // get lightGallery core plugin instance
        this.core = instance;
        this.$LG = $LG;
        // extend module default settings with lightGallery core settings
        this.settings = __assign(__assign({}, lg_hash_settings_1.hashSettings), this.core.settings);
        if (this.settings.hash) {
            this.oldHash = window.location.hash;
            this.init();
        }
        return this;
    }
    Hash.prototype.init = function () {
        this.buildFromHash();
        // Change hash value on after each slide transition
        this.core.LGel.on(lg_events_1.lGEvents.afterSlide + ".hash", this.onAfterSlide.bind(this));
        this.core.LGel.on(lg_events_1.lGEvents.afterClose + ".hash", this.onCloseAfter.bind(this));
        // Listen hash change and change the slide according to slide value
        this.$LG(window).on("hashchange.lg.hash.global" + this.core.lgId, this.onHashchange.bind(this));
    };
    Hash.prototype.onAfterSlide = function (event) {
        var slideName = this.core.galleryItems[event.detail.index].slideName;
        slideName = this.settings.customSlideName
            ? slideName || event.detail.index
            : event.detail.index;
        if (history.replaceState) {
            history.replaceState(null, '', window.location.pathname +
                window.location.search +
                '#lg=' +
                this.settings.galleryId +
                '&slide=' +
                slideName);
        }
        else {
            window.location.hash =
                'lg=' + this.settings.galleryId + '&slide=' + slideName;
        }
    };
    /**
     * Get index of the slide from custom slideName. Has to be a public method. Used in hash plugin
     * @param {String} hash
     * @returns {Number} Index of the slide.
     */
    Hash.prototype.getIndexFromUrl = function (hash) {
        if (hash === void 0) { hash = window.location.hash; }
        var slideName = hash.split('&slide=')[1];
        var _idx = 0;
        if (this.settings.customSlideName) {
            for (var index = 0; index < this.core.galleryItems.length; index++) {
                var dynamicEl = this.core.galleryItems[index];
                if (dynamicEl.slideName === slideName) {
                    _idx = index;
                    break;
                }
            }
        }
        else {
            _idx = parseInt(slideName, 10);
        }
        return isNaN(_idx) ? 0 : _idx;
    };
    // Build Gallery if gallery id exist in the URL
    Hash.prototype.buildFromHash = function () {
        // if dynamic option is enabled execute immediately
        var _hash = window.location.hash;
        if (_hash.indexOf('lg=' + this.settings.galleryId) > 0) {
            // This class is used to remove the initial animation if galleryId present in the URL
            this.$LG(document.body).addClass('lg-from-hash');
            var index = this.getIndexFromUrl(_hash);
            this.core.openGallery(index);
            return true;
        }
    };
    Hash.prototype.onCloseAfter = function () {
        // Reset to old hash value
        if (this.oldHash &&
            this.oldHash.indexOf('lg=' + this.settings.galleryId) < 0) {
            if (history.replaceState) {
                history.replaceState(null, '', this.oldHash);
            }
            else {
                window.location.hash = this.oldHash;
            }
        }
        else {
            if (history.replaceState) {
                history.replaceState(null, document.title, window.location.pathname + window.location.search);
            }
            else {
                window.location.hash = '';
            }
        }
    };
    Hash.prototype.onHashchange = function () {
        if (!this.core.lgOpened)
            return;
        var _hash = window.location.hash;
        var index = this.getIndexFromUrl(_hash);
        // it galleryId doesn't exist in the url close the gallery
        if (_hash.indexOf('lg=' + this.settings.galleryId) > -1) {
            this.core.slide(index, false, false);
        }
        else if (this.core.lGalleryOn) {
            this.core.closeGallery();
        }
    };
    Hash.prototype.closeGallery = function () {
        if (this.settings.hash) {
            this.$LG(document.body).removeClass('lg-from-hash');
        }
    };
    Hash.prototype.destroy = function () {
        this.core.LGel.off('.lg.hash');
        this.core.LGel.off('.hash');
        this.$LG(window).off("hashchange.lg.hash.global" + this.core.lgId);
    };
    return Hash;
}());
exports.default = Hash;
//# sourceMappingURL=lg-hash.js.map