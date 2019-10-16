webpackJsonp([0],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentOutFormPageModule", function() { return RentOutFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rent_out_form__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { FileUploader, FileLikeObject } from 'ng2-file-upload';

var RentOutFormPageModule = /** @class */ (function () {
    function RentOutFormPageModule() {
    }
    RentOutFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rent_out_form__["a" /* RentOutFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rent_out_form__["a" /* RentOutFormPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], RentOutFormPageModule);
    return RentOutFormPageModule;
}());

//# sourceMappingURL=rent-out-form.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var file_like_object_class_1 = __webpack_require__(731);
var file_item_class_1 = __webpack_require__(733);
var file_type_class_1 = __webpack_require__(758);
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var file_uploader_class_1 = __webpack_require__(730);
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(731);
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var file_uploader_class_1 = __webpack_require__(730);
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentOutFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_language_service_language_service__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RentOutFormPage = /** @class */ (function () {
    function RentOutFormPage(languageService, events, _fb, navCtrl, navParams, poviderForAllProvider, toastCtrl, actionSheetCtrl, camera, loadingCtrl, storage, transfer, imagePicker, translate) {
        var _this = this;
        this.languageService = languageService;
        this.events = events;
        this._fb = _fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.poviderForAllProvider = poviderForAllProvider;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.transfer = transfer;
        this.imagePicker = imagePicker;
        this.translate = translate;
        this.section1 = true;
        this.section2 = false;
        this.section3 = false;
        this.sellSection1 = true;
        this.sellSection2 = false;
        this.sellSection3 = false;
        this.imageUploadId = [];
        this.urls = [];
        this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
        this.floors = ['1', '2', '3', '4', '5', '6', '7+'];
        this.rooms = ['1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '6+'];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__["FileUploader"]({});
        this.hasBaseDropZoneOver = false;
        this.amen = [];
        this.languages = this.languageService.getLanguages();
        this.getUserDetails();
        this.storage.get('platform').then(function (val) {
            _this.checkBrowser = val;
            //  alert('CHECK BROWSER  == '+val);
        });
        this.RentPropertyForm = this._fb.group({
            token: [],
            ImagesId: [],
            propertyType: [],
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propertyTitle: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100)])],
            propertyTypes: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            rooms: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            furniture: [],
            currency_type: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            amenities: [],
            floor: [],
            saleArea: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propertydetails: [],
            description: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(1)])],
            price: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            propImges: [],
            bathrooms: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])]
        });
    }
    RentOutFormPage.prototype.setLanguage = function () {
        var _this = this;
        var defaultLanguage = this.translate.getDefaultLang();
        console.log("LANGUAGE === " + defaultLanguage);
        if (this.languageSelected) {
            this.translate.setDefaultLang(this.languageSelected);
            this.translate.use(this.languageSelected);
            this.lanCss = this.languageSelected;
            this.storage.get('user').then(function (details) {
                _this.poviderForAllProvider.UpdateLanguage('https://sapir.app/wp-json/mobileapi/update_app_language', details.token, _this.languageSelected).subscribe(function (val) {
                    console.log("Change Language === ", val);
                });
                console.table(details);
                details.selected_language = _this.languageSelected;
                console.log("user details", details);
                _this.storage.set('user', details);
                _this.events.publish('lan:created', details.selected_language);
            });
        }
        else {
            this.languageSelected = defaultLanguage;
            this.translate.use(defaultLanguage);
        }
        this.selectOptions = {
            cssClass: this.lanCss,
        };
    };
    RentOutFormPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.getCity();
        this.storage.get('user').then(function (val) {
            if (val) {
                _this.token = val.token;
                _this.getCity();
                console.log("VAL TOKEn" + val.token);
            }
            else {
            }
        });
        // this.getCity();
        console.log('ionViewDidLoad RentOutFormPage');
    };
    RentOutFormPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    // SEND FORM===========================================================================================
    //IMAGE SHAREING
    RentOutFormPage.prototype.addImage = function () {
        var _this = this;
        console.log("iMAGE upload counnt " + this.imageUploadId.length);
        if (this.imageUploadId.length <= 15) {
            var toast = this.toastCtrl.create({
                message: 'User was added successfully',
                duration: 3000,
                position: 'top'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Upload your Image:',
                buttons: [
                    {
                        text: 'Camera',
                        role: 'destructive',
                        handler: function () {
                            console.log('Destructive clicked');
                            var options = {
                                quality: 100,
                                destinationType: _this.camera.DestinationType.FILE_URI,
                                sourceType: _this.camera.PictureSourceType.CAMERA,
                            };
                            console.log("OPTION == " + JSON.stringify(options));
                            _this.camera.getPicture(options).then(function (imageData) {
                                _this.imageURI = imageData;
                                console.log("IMAGE DATA" + _this.imageURI);
                                _this.uploadFile();
                            }, function (err) {
                                console.log(err);
                                //toast.present(err);
                            });
                        }
                    }, {
                        text: 'Gallery',
                        handler: function () {
                            var options = {
                                maximumImagesCount: 15,
                                minimumImagesCount: 5,
                                width: 800,
                                height: 800,
                                quality: 80
                            };
                            _this.imagePicker.getPictures(options).then(function (results) {
                                var totalImage = results.length + _this.imageUploadId.length;
                                console.log("Total Images ==== " + totalImage);
                                if (totalImage <= 15) {
                                    for (var i = 0; i < results.length; i++) {
                                        console.log('Image URI: ' + results[i]);
                                        _this.imageURI = results[i];
                                        _this.uploadFile();
                                    }
                                }
                                else {
                                    _this.alertMsg(' please add images min 5 max 15  you are uploded ' + _this.imageUploadId.length + ' image');
                                }
                            }, function (err) { });
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'You are uploaded maximum images',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    RentOutFormPage.prototype.uploadFile = function () {
        var _this = this;
        var upImgUrl = 'https://sapir.app/wp-json/mobileapi/image_upload?token=';
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'imageURI',
            fileName: 'ionicfile.jpeg',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        console.log("IMAGE ", this.imageURI);
        fileTransfer.upload(this.imageURI, upImgUrl + this.token, options)
            .then(function (data) {
            _this.imageUploadId.push(data.response);
            console.log("Store image Id == " + _this.imageUploadId + " Image Response Data == " + JSON.stringify(data.response));
            loader.dismiss();
            // this.presentToast("Image uploaded successfully");
            _this.uplodedImage = _this.imageUploadId.length;
        }, function (err) {
            console.log("Error = " + JSON.stringify(err));
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    RentOutFormPage.prototype.sendData = function (formValue) {
        this.numOfImages = this.imageUploadId.length;
        if (this.imageUploadId.length < 5) {
            // this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');
            if (this.lanCss == 'en') {
                this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');
            }
            else if (this.lanCss == 'ar') {
                this.alertMsg('(העלה תמונות של הנכס (מינימום: 5 תמונות מקסימום: 15');
            }
        }
        else {
            // this.alertMsg('you are added '+this.imageUploadId+'image');
            formValue.value.propertydetails = this.propertiesDetails;
            formValue.value.ImagesId = this.imageUploadId;
            this.sendDataNow(formValue);
        }
    };
    // process send button
    RentOutFormPage.prototype.sendDataNow = function (formValue) {
        var _this = this;
        console.log("VALUEsss ===== " + JSON.stringify(formValue.value.token));
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var url = "createformdata";
        this.poviderForAllProvider.post(url, formValue.value).subscribe(function (res) {
            if (res.status == "success") {
                loader.dismiss();
                _this.alertMsg(res.msg);
                _this.storage.get('user').then(function (val) {
                    console.log("LOCAL STORAGE === ", JSON.stringify(val));
                    val.no_of_properties = parseInt(val.no_of_properties) + 1;
                    _this.storage.set('user', val);
                });
                _this.navCtrl.setRoot('page-home');
            }
            else if (res.status == "error") {
                if (res.errMsg == 'invalid_token') {
                    _this.alertMsg(res.msg);
                    loader.dismiss();
                }
                else {
                    _this.alertMsg(res.msg);
                    loader.dismiss();
                }
            }
        }), function (err) {
            console.log(err);
            loader.dismiss();
        };
    };
    RentOutFormPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RentOutFormPage.prototype.alertMsg = function (msg) {
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    // END FORM ============================================================================================
    RentOutFormPage.prototype.getCity = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            console.log("prop rent Ts == " + val.token);
            _this.poviderForAllProvider.newgetCity(val.token).then(function (data) {
                _this.citys = data.res;
            });
        });
    };
    //  section Hide or Show
    RentOutFormPage.prototype.section = function (val) {
        console.log("AMEN", this.amen);
        this.RentPropertyForm.value.amenities = this.amen;
        console.log("AMENITIES ++++++++=======" + this.RentPropertyForm.value.amenities);
        var sectionShow = val;
        console.log("SHOW section ==" + sectionShow);
        if (sectionShow == 'section2') {
            this.section1 = false;
            this.section2 = true;
            this.section3 = false;
        }
        if (sectionShow == 'section3') {
            this.section3 = true;
            this.section1 = false;
            this.section2 = false;
        }
        if (sectionShow == 'section1') {
            this.section1 = true;
            this.section2 = false;
            this.section3 = false;
        }
    };
    // HIDE AND SHOW
    RentOutFormPage.prototype.updateSearch = function () {
        // console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            //   console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            if (predictions != null) {
                predictions.forEach(function (prediction) {
                    self.autocompleteItems.push(prediction);
                });
            }
        });
    };
    RentOutFormPage.prototype.chooseItem = function (item) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'address': item.description
        }, function (results, status) {
            console.log("RESULTS  == " + JSON.stringify(results));
            _this.propertiesDetails = results;
            // this.start = results[0].address_components[0].long_name;
            // console.log("Start Origin +++===" + JSON.stringify(results[0].address_components[0].long_name));
            //end
        });
        //console.log(item);
        // console.log(item.description);
        this.autocompleteItems = [];
        this.autocomplete.query = item.description;
    };
    // FILE UPLOAD ===============================
    RentOutFormPage.prototype.saveImg = function (image) {
        console.log("Images === " + JSON.stringify(image));
    };
    RentOutFormPage.prototype.onUploadChange = function (ev) {
        var myFile = ev.target.files[0];
        console.log("URL ====================================== " + JSON.stringify(ev));
    };
    RentOutFormPage.prototype.getFiles = function (RentPropertyForm) {
        alert(RentPropertyForm);
        console.log("FILTER ===" + JSON.stringify(RentPropertyForm.value));
        //  this.uploader.queue.map((fileItem) => {
        //    console.log("UPLOAD ====== "+fileItem.file);
        // });
    };
    // MULTIPLE IMAGE UPLOAD =================
    RentOutFormPage.prototype.onSelectFile = function (event) {
        var _this = this;
        this.filesAmount = event.target.files.length;
        if (event.target.files && event.target.files[0] && this.filesAmount >= 5 && this.filesAmount <= 15) {
            this.imageURI = event.target.files;
            var reader = new FormData();
            console.log("READER ", reader);
            for (var i = 0; i < this.filesAmount; i++) {
                reader.append('file[]', event.target.files[i]);
            }
            var url = "pwa_fileupload";
            this.poviderForAllProvider.post(url, reader).subscribe(function (res) {
                console.log("IMAGE ", res);
                for (var i = 0; i < res.length; i++) {
                    _this.imageUploadId.push(res[i]);
                }
            }), function (err) {
                console.log(err);
            };
        }
        else {
            this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');
        }
    };
    RentOutFormPage.prototype.BrowsersendData = function (formValue) {
        console.log("FORM VALUE ===" + JSON.stringify(formValue));
        formValue.value.ImagesId = this.imageUploadId;
        var imgIdLength = this.imageUploadId.length;
        console.log("image Length == ", imgIdLength);
        if (imgIdLength >= 5 && imgIdLength <= 15) {
            this.sendDataNow(formValue);
        }
        else {
            this.alertMsg(' please add images min 5 max 15  you are uploded ' + this.imageUploadId.length + ' image');
        }
    };
    RentOutFormPage.prototype.getUserDetails = function () {
        var _this = this;
        this.storage.get('user').then(function (details) {
            console.table(details);
            _this.translate.use(details.selected_language);
            _this.lanCss = details.selected_language;
            console.log(" LANGUAGE CSS " + _this.lanCss);
            console.log("user language ======= ", details.selected_language + " LANGUAGE CSSS======== " + _this.lanCss);
            _this.lanCss = details.selected_language;
            if (_this.lanCss == 'ar') {
                _this.selectMinPrice = 'בחר מחיר מינימלי';
                _this.selectMaxPrice = 'בחר מחיר מרבי';
            }
            else {
                _this.selectMinPrice = 'Select Min Price';
                _this.selectMaxPrice = 'Select Max Price';
            }
            _this.selectOptions = {
                cssClass: _this.lanCss,
            };
            if (details.selected_language == 'ar') {
                _this.amenitiesDropDown = [
                    // { value: 'Air-conditioning', component: 'מיזוג אויר' },
                    // { value: 'Patio or balcony', component: 'מרפסת' },
                    // { value: 'Storage', component: 'מחסן' },
                    // { value: 'Dishwasher', component: 'מדיח כלים' },
                    // { value: 'Covered parking', component: 'חניה מקורה' },
                    // { value: 'Laundry Washe', component: 'מכונת כביסה' },
                    // { value: 'Dryer', component: 'מייבש כביסה' },
                    // { value: 'Pool', component: 'בריכה' },
                    // { value: 'Garden', component: 'דירת גן' },
                    // { value: 'Pet Friendly', component: 'אפשרי בעלי חיים' },
                    { value: 'Air-conditioning', component: 'מיזוג אויר' },
                    { value: 'Balcony', component: 'מרפסת' },
                    { value: 'Storage', component: 'מחסן' },
                    { value: 'Parking', component: 'חניה' },
                    { value: 'Elevator', component: 'מעלית' },
                    { value: 'Pets', component: 'חיות מחמד' },
                    { value: 'Accessibility', component: 'נגישות' },
                    { value: 'Bars', component: 'ברים' },
                    { value: 'Renovated', component: 'משופץ' },
                    { value: 'Safe Room', component: 'חדר בטוח' },
                    { value: 'Long-Term', component: 'טווח ארוך' },
                ];
            }
            else {
                _this.amenitiesDropDown = [
                    // { value: 'Air-conditioning', component: 'Air-conditioning' },
                    // { value: 'Patio or balcony', component: 'Patio or balcony' },
                    // { value: 'Storage', component: 'Storage' },
                    // { value: 'Dishwasher', component: 'Dishwasher' },
                    // { value: 'Covered parking', component: 'Covered parking' },
                    // { value: 'Laundry Washe', component: 'Laundry Washe' },
                    // { value: 'Dryer', component: 'Dryer' },
                    // { value: 'Pool', component: 'Pool' },
                    // { value: 'Garden', component: 'Garden' },
                    // { value: 'Pet Friendly', component: 'Pet Friendly' },
                    { value: 'Air-conditioning', component: 'Air-conditioning' },
                    { value: 'Balcony', component: 'Balcony' },
                    { value: 'Storage', component: 'Storage' },
                    { value: 'Parking', component: 'Parking' },
                    { value: 'Elevator', component: 'Elevator' },
                    { value: 'Pets', component: 'Pets' },
                    { value: 'Accessibility', component: 'Accessibility' },
                    { value: 'Bars', component: 'Bars' },
                    { value: 'Renovated', component: 'Renovated' },
                    { value: 'Safe Room', component: 'Safe Room' },
                    { value: 'Long-Term', component: 'Long-Term' },
                ];
            }
        });
    };
    RentOutFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rent-out-form',template:/*ion-inline-start:"/private/var/root/Desktop/app/sapirForMob/src/pages/rent-out-form/rent-out-form.html"*/'\n<ion-header padding class="lg_screen_bg">\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menu_icon"></ion-icon>\n      </button>\n          <ion-title Class="for_sale">\n            <img src="assets/imgs/logosapir.png" class="logo_img">\n          </ion-title>\n        <!-- <img src="assets/imgs/search.png" class="serach"> -->\n    </ion-navbar>\n    <div class="language_selector" end>\n      <ion-select [(ngModel)]="languageSelected" (ionChange)=\'setLanguage()\' [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" placeholder="{{ \'Set Language\' | translate }}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n        <ion-option *ngFor="let item of languages" [value]="item.code">{{item.name | translate}}</ion-option>\n      </ion-select>\n    </div>\n  </ion-header>\n<ion-content no-padding>\n\n     <form method="post" enctype="multipart/form-data" class="list-form" [formGroup]="RentPropertyForm"  (ngSubmit)="sendData(RentPropertyForm)"> \n        <ion-input type="text"  formControlName="token" class="token_sec"></ion-input>\n        <ion-input type="text"  hidden formControlName="token" value="{{token}}" class="token_sec"></ion-input>\n        <ion-input type="text"  formControlName="ImagesId" class="token_sec"></ion-input>\n        <ion-input type="text" hidden formControlName="propertyType" value=\'rent\' ></ion-input>   \n        <ion-input type="text" hidden formControlName="currency_type" value=\'Shekel\' ></ion-input>   \n\n        <ion-row class="city_home" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n            <ion-col col-12 class="rent">\n              <span class="red astrick">*</span><ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="city" enctype=\'multipart/form-data\' placeholder="{{\'Select Location\' |translate}}" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                <ion-option *ngFor="let citydetails of citys" value="{{citydetails.id}}">{{citydetails.city | translate }}</ion-option>\n              </ion-select>\n              <p ion-text color="danger" padding class="text-1x has-error" *ngIf="RentPropertyForm.get(\'city\').touched && RentPropertyForm.get(\'city\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n            </ion-col>\n          </ion-row>\n          <div *ngIf="section1" id="slide1">\n              <ion-card [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                  <ion-card-content no-padding>\n                      <ion-item>\n                          <ion-label color="primary" stacked><span class="red">*</span>{{\'Property Title\' | translate}}:</ion-label>\n                          <ion-input type="text" maxlength="50" placeholder="{{\'Type here\' | translate}}" formControlName="propertyTitle" class="input_border"></ion-input>\n                        </ion-item>\n                        <p ion-text color="danger" padding class="text-1x has-error" *ngIf="RentPropertyForm.get(\'propertyTitle\').touched && RentPropertyForm.get(\'propertyTitle\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n\n                            <ion-label color="primary" stacked padding><span class="red">*</span>{{\'Type\' | translate}}:</ion-label>\n                            <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="propertyTypes" placeholder="{{\'Select Type\' | translate}}" class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                              <ion-option value="Cottage">{{\'Cottage\' | translate}}</ion-option>\n                              <ion-option value="Duplex">{{\'Duplex\' | translate}}</ion-option>\n                              <ion-option value="Flats">{{\'Flats\' | translate}}</ion-option>\n                              <ion-option value="Penthouse">{{\'Penthouse\' | translate}}</ion-option>\n                              <ion-option value="Villa">{{\'Villa\' | translate}}</ion-option>\n                              <ion-option value="Studio">{{\'Studio\' | translate}}</ion-option>\n                              <ion-option value="Commercial">{{\'Commercial\' | translate}}</ion-option>    \n                            </ion-select>\n      \n                            <p ion-text color="danger" padding class="text-1x has-error" *ngIf="RentPropertyForm.get(\'propertyTypes\').touched && RentPropertyForm.get(\'propertyTypes\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>  \n                                  <ion-row class="new_type">\n                                      <ion-col col-12>\n                                        <ion-label color="primary" stacked padding><span class="red">*</span>{{\'Price / per month\' | translate}}:</ion-label>\n                                        <ion-input type="tel" formControlName="price" placeholder="{{\'Type here\' |translate}}" class="select_cateog_sell input_border"></ion-input>\n                                        <p ion-text color="danger" padding class="text-1x has-error" *ngIf="RentPropertyForm.get(\'price\').touched && RentPropertyForm.get(\'price\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                                      </ion-col>\n                                </ion-row>   \n                                \n                                <ion-row class="new_type">\n                                  <ion-col col-12>\n                                    <ion-label color="primary" stacked padding><span class="red">*</span>{{\'Phone Number\' | translate}}:</ion-label>\n                                    <ion-input type="tel"  formControlName="phone" placeholder="{{\'Phone Number\' | translate}}" class="select_cateog_sell"></ion-input>\n                                    <p ion-text color="danger" padding class="text-1x has-error" *ngIf="RentPropertyForm.get(\'phone\').touched && RentPropertyForm.get(\'phone\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                                  </ion-col>\n                            </ion-row>  \n                        <ion-row>\n                            <ion-col col-12 class="Next" padding text-right>\n                              <button ion-button (click)="section(\'section2\')" [disabled]="RentPropertyForm.get(\'city\').hasError(\'required\') || RentPropertyForm.get(\'propertyTitle\').hasError(\'required\')  || RentPropertyForm.get(\'phone\').hasError(\'required\') || RentPropertyForm.get(\'propertyTypes\').hasError(\'required\') || RentPropertyForm.get(\'price\').hasError(\'required\')" color="secondary">{{\'Next\' |translate}}</button>\n                            </ion-col>\n                        </ion-row>\n                  </ion-card-content>\n              </ion-card>\n          </div>\n          <div *ngIf="section2" id="section2">\n              <ion-card [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n                <ion-card-content no-padding>\n                  <!-- <p>&nbsp;</p> -->\n                  <ion-row>\n                      <ion-col col-12>\n                          <ion-item>\n                              <ion-label color="primary" stacked><span class="red">*</span>{{\'Number of Bedrooms\' | translate}}:</ion-label>                          \n                              <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="rooms" placeholder="{{\'Number of Bedrooms\' | translate}}" class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                                <ion-option  value="1">Studio</ion-option>      \n                                <ion-option *ngFor="let num of rooms" value="{{num}}">{{num}}</ion-option>\n                              </ion-select>\n                          </ion-item>\n                            <p ion-text color="danger" padding class="text-1x has-error" *ngIf="RentPropertyForm.get(\'rooms\').touched && RentPropertyForm.get(\'rooms\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                      </ion-col>\n                      </ion-row>\n\n                      <ion-row>\n                          <ion-col col-12>\n                              <ion-item>\n                                  <ion-label color="primary" stacked><span class="red">*</span>{{\'Number of Bathrooms\' | translate}}:</ion-label>                          \n                                  <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="bathrooms" placeholder="{{\'Number of Bathrooms\' | translate}}" class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                                    <ion-option value="1">1</ion-option>\n                                    <ion-option value="2">2</ion-option>     \n                                    <ion-option value="3">3</ion-option>\n                                    <ion-option value="4">4</ion-option>\n                                    <ion-option value="5">5</ion-option>\n                                    <ion-option value="6">6</ion-option>\n                                    <ion-option value="7+">7+</ion-option>\n                                  </ion-select>\n                              </ion-item>\n                              <p ion-text color="danger" padding class="text-1x has-error" *ngIf="RentPropertyForm.get(\'bathrooms\').touched && RentPropertyForm.get(\'bathrooms\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                          </ion-col>\n                      </ion-row>\n\n                      <ion-row class="furniture_sec">\n                        <ion-col col-12>\n                            <ion-label color="primary" stacked padding>{{\'Furniture\' | translate}}:</ion-label>\n                            <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="furniture" placeholder="{{\'Furniture\' | translate}}" class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                              <ion-option value="Furnished">{{\'Furnished\' | translate}}</ion-option>\n                              <ion-option value="Unfurnished">{{\'Unfurnished\' | translate}}</ion-option>\n                              <ion-option value="Semi Furnished">{{\'Semi Furnished\' | translate}}</ion-option>\n                            </ion-select>\n                        </ion-col>\n                          <!-- <p ion-text color="danger" padding class="text-1x has-error" *ngIf="RentPropertyForm.get(\'furniture\').touched && RentPropertyForm.get(\'furniture\').hasError(\'required\')">{{\'This field is required\' | translate}}</p> -->\n                      </ion-row>\n                      <ion-row>\n                          <ion-col col-12 class="rent">\n                              <ion-item>\n                                  <ion-label color="primary" stacked>{{\'Building Floor\' | translate}}:</ion-label>\n                                  <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" formControlName="floor" placeholder="{{\'floor\' | translate}}"  class="select_cateog_sell input_border" [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                                      <ion-option value="0">{{\'Ground level\' | translate}}</ion-option>   \n                                    <ion-option *ngFor="let num of numbers" value="{{num}}">{{num}}</ion-option>\n                                    </ion-select>\n                                </ion-item>\n                            </ion-col>\n                          </ion-row>\n                  <ion-row class="previous_btn">\n                    <ion-col col-6  text-left padding>					\n                      <button ion-button color="secondary" (click)="section(\'section1\')">{{\'Back\' | translate}}</button>\n                    </ion-col>\n                    <ion-col col-6 text-right padding>\n                      <button [disabled]=" RentPropertyForm.get(\'bathrooms\').hasError(\'required\')"  ion-button color="secondary" (click)="section(\'section3\')">{{\'Next\' |translate}}</button>\n                    </ion-col>\n                  </ion-row>\n                </ion-card-content>\n              </ion-card>\n            </div>\n            <div *ngIf="section3" id="section3">\n                <ion-card [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}">\n										<ion-card-content no-padding>\n                        <ion-row>\n                            <ion-col col-12 class="rent">\n                                <ion-item>\n                                  <ion-label color="primary" stacked>{{\'Amenities\' | translate}}:</ion-label>\n                                     <ion-select [selectOptions]="selectOptions" [ngClass]="{\'mirrorContent\' : (lanCss==\'ar\'),  \'ltr\' : (normalContent !=\'ar\')}" [(ngModel)]="amen" formControlName="amenities" placeholder="{{\'Amenities\' | translate}}"  class="select_cateog_sell input_border" multiple [cancelText]="\'CANCEL\' | translate"   [okText]="\'OK\'  | translate">\n                                      \n                                      <ion-option *ngFor="let type of amenitiesDropDown" value="{{type.value}}">{{type.component}}</ion-option>  \n                                      \n                                      </ion-select>\n                                  </ion-item>\n\n                                  \n                                </ion-col> \n                    </ion-row>  \n                            <ion-row>\n                                <ion-col col-12>\n                                 <ion-label color="primary" class="search_bar_margin" stacked padding><span class="red">*</span>{{\'Address\' | translate}}:</ion-label>\n                                   <ion-searchbar\n                                    [(ngModel)]="autocomplete.query"\n                                    [showCancelButton]="false"\n                                    (ionInput)="updateSearch()"\n                                    formControlName="saleArea"\n                                    placeholder="{{\'Address\' | translate}}">\n                                    </ion-searchbar>\n                                    <ion-list class="placelist">\n                                    <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">\n                                    {{ item.description }}\n                                    </ion-item>\n                                    </ion-list>\n                                    <ion-input type="text" hidden formControlName="propertydetails"></ion-input>\n                                  </ion-col>\n                                <p ion-text color="danger" class="text-1x has-error" padding *ngIf="RentPropertyForm.get(\'saleArea\').touched && RentPropertyForm.get(\'saleArea\').hasError(\'required\')">{{\'This field is required\' | translate}}</p>\n                        \n                            <ion-col col-12 class="upload_btn">                                  \n                                      <ion-label ion-text color="dark" margin-bottom class="fw500">{{\'Add Images of Property Min 5 & Max 15\' | translate}}</ion-label>\n\n                                    <ion-input type=\'file\'  *ngIf="checkBrowser==1"  (change)="onSelectFile($event)" multiple></ion-input>\n                                \n                                  <button ion-button *ngIf="checkBrowser !==1" icon-only color="light" type="button" (click)="addImage()" margin-left><span *ngIf=" uplodedImage > 0" class="upload_text">{{uplodedImage}}</span>\n                                    <ion-icon name="log-out" color="dark"></ion-icon>\n                                  </button>\n                                  <ion-col col-12>\n                                    <ion-label color="primary" stacked padding><span class="red">*</span>{{\'Property Description\' | translate}}:</ion-label>\n                                    <ion-input type="text" formControlName="description" placeholder="{{\'Type here\' | translate}}" class="select_cateog_sell input_border"></ion-input>\n                                    <p ion-text color="danger" padding class="text-1x has-error" *ngIf="RentPropertyForm.get(\'description\').touched &&  RentPropertyForm.get(\'description\').hasError(\'required\')">{{"This field is required"   | translate}}</p>\n                                  </ion-col> \n                              </ion-col>\n                              <div class="final_btn">\n                                <ion-col col-6>\n                                  <button ion-button color="secondary" (click)="section(\'section2\')">{{\'Back\' | translate}}</button>\n                              </ion-col> \n                              <ion-col col-6>\n                                  <button *ngIf="checkBrowser !==1" [disabled]="!RentPropertyForm.valid" ion-button block color="dark" type="submit">{{\'Submit\' | translate}}</button> \n                                  <!-- for BROWSER -->\n                                  <button *ngIf="checkBrowser==1" accept="image/*" [disabled]="!RentPropertyForm.valid" type="button" (click)="BrowsersendData(RentPropertyForm)" ion-button block color="dark" >{{\'Submit\' | translate}}</button>\n                              </ion-col>\n                              </div>\n                             \n                            </ion-row>\n                    </ion-card-content>\n                </ion-card>\n            </div>\n </form> \n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/app/sapirForMob/src/pages/rent-out-form/rent-out-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_language_service_language_service__["a" /* LanguageServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_povider_for_all_povider_for_all__["a" /* PoviderForAllProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], RentOutFormPage);
    return RentOutFormPage;
}());

//# sourceMappingURL=rent-out-form.js.map

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(732));
__export(__webpack_require__(734));
__export(__webpack_require__(730));
__export(__webpack_require__(733));
__export(__webpack_require__(731));
var file_upload_module_1 = __webpack_require__(759);
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(44);
var core_1 = __webpack_require__(1);
var file_drop_directive_1 = __webpack_require__(734);
var file_select_directive_1 = __webpack_require__(732);
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ })

});
//# sourceMappingURL=0.js.map