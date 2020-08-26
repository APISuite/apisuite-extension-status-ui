'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var i18next = _interopDefault(require('i18next'));
var React = _interopDefault(require('react'));
var styles = require('@material-ui/styles');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
 * The different (sub)menus that the APISuite provides.
 */
var Menus;
(function (Menus) {
    // Header Anonymous
    Menus["HeaderAnonymousMain"] = "HEADER_ANONYMOUS_MAIN";
    // Header Authenticated
    Menus["HeaderAuthenticatedMain"] = "HEADER_AUTHENTICATED_MAIN";
    Menus["HeaderAuthenticatedDashboard"] = "HEADER_AUTHENTICATED_DASHBOARD";
    Menus["HeaderAuthenticatedProfile"] = "HEADER_AUTHENTICATED_PROFILE";
    // Footer
    Menus["FooterProducts"] = "FOOTER_PRODUCTS";
    Menus["FooterProfile"] = "FOOTER_PROFILE";
    Menus["FooterDocumentation"] = "FOOTER_DOCUMENTATION";
    Menus["FooterTeam"] = "FOOTER_TEAM";
    Menus["FooterDashboard"] = "FOOTER_DASHBOARD";
    Menus["FooterLegal"] = "FOOTER_LEGAL";
    Menus["FooterSupport"] = "FOOTER_SUPPORT";
    Menus["FooterStatus"] = "FOOTER_STATUS";
})(Menus || (Menus = {}));
/**
 * A `Section` is an area/section/place anywhere in the portal.
 *
 * These are the different sections that the APISuite portal provides for
 * extensions to inject arbitrary React components.
 */
var Sections;
(function (Sections) {
    Sections["HomepagePrecontent"] = "HOMEPAGE_PRECONTENT";
})(Sections || (Sections = {}));
/**
 * All extensions must inherit from this base `Extension` class. It encapsulates
 * and provides all the functionality that the APISuite Portal needs to interact
 * with any extension.
 *
 * Example usage:
 *
 * ```typescript
 * import { Extension } from "apisuite-extension-ui-types";
 * import hooks from "./hooks";
 * import configHelper from "./helpers/config";
 * import { name, version } from "../package.json";
 *
 * class MyExtension extends Extension {
 *   static info = {
 *     name,
 *     version,
 *   };
 *
 *   hooks = hooks;
 *
 *   constructor(config?: {}) {
 *     super(config);
 *     configHelper.set(config);
 *   }
 * }
 *
 * export default MyExtension;
 * ```
 */
var Extension = /** @class */ (function () {
    function Extension(config) {
        this.config = config || {};
        this.hooks = {
            menu: function () { return null; },
            pages: function () { return null; },
            sections: function () { return null; }
        };
    }
    Object.defineProperty(Extension.prototype, "name", {
        /**
         * The name of the extension
         */
        get: function () {
            return this.constructor.info.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Extension.prototype, "version", {
        /**
         * The version of the extension
         */
        get: function () {
            return this.constructor.info.version;
        },
        enumerable: false,
        configurable: true
    });
    return Extension;
}());

var name = "apisuite-extension-status-ui";
var version = "1.0.0";

var EXT_NAME = name;

var enUS = {
	
};

var ptPT = {
	
};

i18next.addResourceBundle("en", EXT_NAME, enUS);
i18next.addResourceBundle("pt", EXT_NAME, ptPT);

var _a;
var menuConfig = (_a = {},
    _a[Menus.HeaderAuthenticatedMain] = [
        {
            label: "Status",
            route: "/extensions/status-of-services",
        }
    ],
    _a);
var hookMenu = function (menu) {
    return menuConfig[menu] || null;
};

var StatusIcon = function (_a) {
    var statusCode = _a.statusCode;
    switch (statusCode.toLowerCase()) {
        case 'working':
        case 'resolved':
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                React.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                React.createElement("path", { d: "M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z" })));
        case 'busy':
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                React.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" })));
        case 'maintenance':
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                React.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                React.createElement("path", { d: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" })));
        case 'issues':
        case 'investigating':
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                React.createElement("path", { d: "M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3zM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" })));
        case 'notworking':
            return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                React.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
                React.createElement("path", { d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" })));
        default:
            return React.createElement("svg", null);
    }
};

var colorError = '#ff1515';
var colorMaintenance = '#646464';
var colorSuccess = '#14c762';
var colorTypographyBlack = '#333333';
var colorTypographyGrey = '#AAAAAA';
var colorWarning = '#f5a623';
var fontLarge = '18px';
var fontSmall = '14px';
var radiusCard = '5px';
var useStyles = styles.makeStyles({
    serviceCard: {
        alignItems: 'center',
        borderRadius: radiusCard,
        boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
        display: 'flex',
        height: '90px',
        justifyContent: 'space-between',
        margin: '12px',
        minWidth: '340px',
        padding: '24px',
        position: 'relative',
        width: '565px',
        '&:hover': {
            boxShadow: '0px 2px 13px rgba(0, 0, 0, 0.15)'
        },
        '& h3': {
            color: colorTypographyBlack,
            fontSize: fontLarge,
            fontWeight: 'bold',
            padding: '5px 0'
        },
        '& p': {
            color: colorTypographyGrey,
            fontSize: fontSmall,
            padding: '5px 0'
        }
    },
    serviceCardDescription: {
        display: 'block',
        minWidth: '240px'
    },
    icon: {
        height: '28px',
        width: '28px'
    },
    working: {
        fill: colorSuccess
    },
    issues: {
        fill: colorWarning
    },
    notworking: {
        fill: colorError
    },
    busy: {
        fill: colorError
    },
    maintenance: {
        fill: colorMaintenance
    }
});

var ServiceCard = function (_a) {
    var serviceName = _a.serviceName, serviceStatusDescription = _a.serviceStatusDescription, serviceStatusCode = _a.serviceStatusCode;
    var classes = useStyles();
    return (React.createElement("li", { className: classes.serviceCard },
        React.createElement("div", { className: classes.serviceCardDescription },
            React.createElement("h3", null, serviceName),
            React.createElement("p", null, serviceStatusDescription)),
        React.createElement("span", { className: classes[serviceStatusCode.toLowerCase()] + " " + classes.icon },
            React.createElement(StatusIcon, { statusCode: serviceStatusCode }))));
};

var colorSuccess$1 = '#14c762';
var colorTypographyBlack$1 = '#333333';
var colorTypographyGrey$1 = '#AAAAAA';
var colorWarning$1 = '#f5a623';
var fontLarge$1 = '18px';
var fontSmall$1 = '14px';
var radiusCard$1 = '5px';
var useStyles$1 = styles.makeStyles({
    serviceHistoryCard: {
        alignItems: 'center',
        borderRadius: radiusCard$1,
        boxShadow: '0px 2px 7px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
        display: 'flex',
        height: 'auto',
        justifyContent: 'space-between',
        margin: '12px',
        minWidth: '340px',
        padding: '24px',
        position: 'relative',
        width: '565px',
        '&:hover': {
            boxShadow: '0px 2px 13px rgba(0, 0, 0, 0.15)'
        },
        '& h3': {
            color: colorTypographyBlack$1,
            fontSize: fontLarge$1,
            fontWeight: 'bold',
            padding: '5px 0'
        },
        '& p': {
            color: colorTypographyGrey$1,
            fontSize: fontSmall$1,
            padding: '5px 0'
        }
    },
    serviceHistoryCardDescription: {
        display: 'block',
        minWidth: '240px'
    },
    icon: {
        height: '28px',
        width: '28px'
    },
    resolved: {
        fill: colorSuccess$1
    },
    investigating: {
        fill: colorWarning$1
    }
});

var HistoryCard = function (_a) {
    var latestStatus = _a.latestStatus, incident = _a.incident, solution = _a.solution, statusChangeDate = _a.statusChangeDate;
    var classes = useStyles$1();
    var dateFormat = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
        hour12: false,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    return (React.createElement("li", { className: classes.serviceHistoryCard },
        React.createElement("div", { className: classes.serviceHistoryCardDescription },
            React.createElement("h3", null, latestStatus),
            React.createElement("p", null,
                React.createElement("strong", null, "Incident:"),
                " ",
                incident),
            React.createElement("p", null,
                React.createElement("strong", null, "Solution:"),
                " ",
                solution),
            React.createElement("p", null,
                React.createElement("strong", null, "Date:"),
                " ",
                new Intl.DateTimeFormat('en', dateFormat).format(Date.parse(statusChangeDate)))),
        React.createElement("span", { className: classes[latestStatus.toLowerCase()] + " " + classes.icon },
            React.createElement(StatusIcon, { statusCode: latestStatus.toLowerCase() }))));
};

var useStyles$2 = styles.makeStyles({
    serviceAccordionButton: {
        backgroundColor: '#eee',
        borderRadius: '7.5px 7.5px 0 0',
        border: 'none',
        color: 'rgb(92, 90, 90)',
        cursor: 'pointer',
        display: 'block',
        fontSize: '18px',
        marginBottom: '12.5px',
        minWidth: '340px',
        outline: 'none',
        padding: '18px',
        textAlign: 'left',
        transition: '0.4s',
        width: '586.5px',
        '&:hover': {
            backgroundColor: '#ccc'
        },
        '&:after': {
            color: 'rgb(92, 90, 90)',
            content: '\'(click to show/hide all incidents)\'',
            float: 'right',
            fontSize: '10px',
            fontWeight: 'lighter',
            marginLeft: '5px'
        },
    },
    serviceAccordionContents: {
        marginBottom: '35px',
        transition: 'max-height 0.2s ease-out'
    }
});

var ServiceHistorySection = function (_a) {
    var serviceName = _a.serviceName, serviceHistoryIncidents = _a.serviceHistoryIncidents;
    var classes = useStyles$2();
    var _b = React.useState(false), isAccordionOpen = _b[0], setIsAccordionOpen = _b[1];
    var incidentCards = serviceHistoryIncidents.map(function (incident, index) {
        return (React.createElement(HistoryCard, { key: "serviceHistoryCard" + index, latestStatus: incident.latestStatus, incident: incident.incident, solution: incident.solution, statusChangeDate: incident.statusChangeDate }));
    });
    function handleAccordionClick(event) {
        event.stopPropagation();
        setIsAccordionOpen(!isAccordionOpen);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: classes.serviceAccordionButton, onClick: handleAccordionClick }, serviceName),
        isAccordionOpen &&
            React.createElement("div", { className: classes.serviceAccordionContents }, incidentCards)));
};

var baseConfig = {
    servicesStatusDataUrl: "Base Value",
};

var values = __assign({}, baseConfig);
var config = function () { return values; };
config.set = function (conf) {
    values = __assign(__assign({}, values), conf);
};

function getServicesStatusData() {
    var URL = config().servicesStatusDataUrl;
    return fetch(URL)
        .then(function (response) {
        if (response.status !== 200) {
            console.log("We ran into some issues:", response.status);
            return;
        }
        // If we don't run into any issues, we parse the response into JSON, (...)
        return response.json();
    })
        .then(function (jsonData) {
        // (...) and then we return it.
        return jsonData;
    })
        .catch(function (error) {
        console.log("An error occurred:", error);
    });
}
function getServicesHistoryData() {
    // Mock data, for the time being (i.e., while we don't go over this with the BE bros).
    var servicesHistory = [
        {
            serviceName: "Coffee Machine",
            serviceIncidents: [
                {
                    latestStatus: "Resolved",
                    incident: "Requests for coffee over Wi-Fi were not being fulfilled.",
                    solution: "Looked into, and fixed the machine's Wi-Fi configuration.",
                    statusChangeDate: "2020-03-28T13:14:03.354Z",
                },
                {
                    latestStatus: "Investigating",
                    incident: "Machine makes an odd sound when preparing coffee.",
                    solution: "Yet to be determined.",
                    statusChangeDate: "2020-03-27T21:22:53.354Z",
                },
            ],
        },
        {
            serviceName: "Playstation",
            serviceIncidents: [
                {
                    latestStatus: "Resolved",
                    incident: "Console made some funny noises when playing.",
                    solution: "Hit the thing with a hammer, quiet ever since.",
                    statusChangeDate: "2020-02-10T10:24:33.354Z",
                },
            ],
        },
        {
            serviceName: "Video Scraper",
            serviceIncidents: [
                {
                    latestStatus: "Investigating",
                    incident: "No video scraping requests are being fulfilled.",
                    solution: "Yet to be determined.",
                    statusChangeDate: "2020-02-01T12:45:13.354Z",
                },
            ],
        },
        {
            serviceName: "Awesome API",
            serviceIncidents: [
                {
                    latestStatus: "Investigating",
                    incident: "No response from API when requesting for 'awesome'.",
                    solution: "Yet to be determined.",
                    statusChangeDate: "2020-01-29T16:24:33.354Z",
                }
            ],
        },
        {
            serviceName: "Beer Tap",
            serviceIncidents: [
                {
                    latestStatus: "Investigating",
                    incident: "Beer is coming out warm.",
                    solution: "Yet to be determined.",
                    statusChangeDate: "2020-01-12T09:14:53.354Z",
                }
            ],
        },
    ];
    return servicesHistory;
}

var colorTypographyGrey$2 = '#AAAAAA';
var colorBackgroundGrey = '#F5F5F5';
var fontMedium = '16px';
var minWidth = '1200px';
var radiusTitle = '9px';
var wrapPadding = '0px 40px';
var useStyles$3 = styles.makeStyles({
    sectionTitle: {
        backgroundColor: colorBackgroundGrey,
        borderRadius: radiusTitle,
        color: colorTypographyGrey$2,
        display: 'inline',
        fontSize: fontMedium,
        fontWeight: 'bold',
        margin: '0',
        padding: '5px 8px'
    },
    sectionTitleContainer: {
        display: 'flex',
        margin: '12px'
    },
    wrap: {
        minWidth: minWidth,
        padding: wrapPadding
    },
    pageWrap: {
        margin: '0 auto',
        maxWidth: '1284px',
        paddingTop: '250px'
    },
    currentStatusSection: {
        marginBottom: '40px'
    },
    pastIncidentsSection: {
        marginBottom: '40px'
    }
});

var Status = function () {
    var classes = useStyles$3();
    var _a = React.useState([]), servicesStatusData = _a[0], setServicesStatusData = _a[1];
    var _b = React.useState([]), servicesHistoryData = _b[0], setServicesHistoryData = _b[1];
    var servicesStatusCards = servicesStatusData.map(function (serviceStatusData, index) {
        return (React.createElement(ServiceCard, { key: "serviceCard" + index, serviceName: serviceStatusData.name, serviceStatusDescription: serviceStatusData.status, serviceStatusCode: serviceStatusData.code }));
    });
    var servicesHistory = servicesHistoryData.map(function (serviceHistoryData, index) {
        return (React.createElement(ServiceHistorySection, { key: "serviceHistory" + index, serviceName: serviceHistoryData.serviceName, serviceHistoryIncidents: serviceHistoryData.serviceIncidents }));
    });
    React.useEffect(function () {
        var fetchingOfServicesStatusData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var currentServicesData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getServicesStatusData()];
                    case 1:
                        currentServicesData = _a.sent();
                        setServicesStatusData(currentServicesData);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchingOfServicesStatusData();
    }, []);
    React.useEffect(function () {
        var fetchingOfServicesHistoryData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var currentServicesHistory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getServicesHistoryData()];
                    case 1:
                        currentServicesHistory = _a.sent();
                        setServicesHistoryData(currentServicesHistory);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchingOfServicesHistoryData();
    }, []);
    return (React.createElement("main", { className: classes.pageWrap + " " + classes.wrap },
        React.createElement("section", { className: classes.currentStatusSection },
            React.createElement("div", { className: classes.sectionTitleContainer },
                React.createElement("h2", { className: classes.sectionTitle }, "Current status per service")),
            React.createElement("div", null, servicesStatusCards.length > 0 ? React.createElement("ul", null, servicesStatusCards) : React.createElement("p", null, "No services currently in use."))),
        React.createElement("section", { className: classes.pastIncidentsSection },
            React.createElement("div", { className: classes.sectionTitleContainer },
                React.createElement("h2", { className: classes.sectionTitle }, "Past incidents")),
            React.createElement("div", null, servicesHistory.length > 0 ? React.createElement("ul", null, servicesHistory) : React.createElement("p", null, "No services' history to show.")))));
};

var pagesConfig = [
    {
        auth: true,
        path: "/extensions/status-of-services",
        exact: true,
        component: Status,
    },
];
var hookPages = function () {
    return pagesConfig;
};

var sections = {};
var hookSections = function (section, props) {
    var Component = sections[section];
    if (Component) {
        return React.createElement(Component, __assign({}, props));
    }
    return null;
};

var hooks = {
    menu: hookMenu,
    pages: hookPages,
    sections: hookSections
};

var StatusExtension = /** @class */ (function (_super) {
    __extends(StatusExtension, _super);
    function StatusExtension(config$1) {
        var _this = _super.call(this, config$1) || this;
        _this.hooks = hooks;
        config.set(config$1);
        return _this;
    }
    StatusExtension.info = {
        name: name,
        version: version,
    };
    return StatusExtension;
}(Extension));

module.exports = StatusExtension;
//# sourceMappingURL=index.js.map
