(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{401:function(t,e,a){"use strict";a.r(e);var s=a(45),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"calendar-attendees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calendar-attendees"}},[t._v("#")]),t._v(" Calendar Attendees "),a("Badge",{attrs:{text:"6.2.3",vertical:"middle"}})],1),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/config/attendees.html#basic.html"}},[t._v("basic config object")]),t._v(" accepts a parameter "),a("code",[t._v("attendees")]),t._v(" as a list of "),a("code",[t._v("CalendarAttendee")]),t._v(" objects. This will provide event attendee options to all calendar services.")],1),t._v(" "),a("h2",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" name")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Required: no")])]),t._v(" "),a("p",[t._v("The attendee's name.")]),t._v(" "),a("h2",{attrs:{id:"email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email"}},[t._v("#")]),t._v(" email")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Required: "),a("strong",[t._v("yes")])])]),t._v(" "),a("p",[t._v("The attendee's email address.")]),t._v(" "),a("h2",{attrs:{id:"icsoptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icsoptions"}},[t._v("#")]),t._v(" icsOptions")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("ICSAttendeeOptions")])]),t._v(" "),a("li",[t._v("Required: no")])]),t._v(" "),a("p",[a("code",[t._v("ICSAttendeeOptions")]),t._v(" is a configuration object for specifying iCalendar-specific information about the attendee. It accepts the following parameters:")]),t._v(" "),a("h2",{attrs:{id:"icsoptions-delegatedfrom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icsoptions-delegatedfrom"}},[t._v("#")]),t._v(" icsOptions.delegatedFrom")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Required: no")]),t._v(" "),a("li",[t._v("Any valid URI (e.g., "),a("code",[t._v("MAILTO:john@doe.com")]),t._v(").")])]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://www.kanzaki.com/docs/ical/delegatedFrom.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("delegatee"),a("OutboundLink")],1),t._v(" of the attendee request.")]),t._v(" "),a("h2",{attrs:{id:"icsoptions-partstat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icsoptions-partstat"}},[t._v("#")]),t._v(" icsOptions.partStat")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Required: no")]),t._v(" "),a("li",[t._v("Any valid "),a("a",{attrs:{href:"https://www.kanzaki.com/docs/ical/partstat.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 2445 "),a("code",[t._v("PARTSTAT")]),a("OutboundLink")],1),t._v(" value.")])]),t._v(" "),a("p",[t._v("The participation status of the attendee.")]),t._v(" "),a("h2",{attrs:{id:"icsoptions-role"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icsoptions-role"}},[t._v("#")]),t._v(" icsOptions.role")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Required: no")]),t._v(" "),a("li",[t._v("Any valid "),a("a",{attrs:{href:"https://www.kanzaki.com/docs/ical/role.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 2445 "),a("code",[t._v("ROLE")]),a("OutboundLink")],1),t._v(" value.")])]),t._v(" "),a("p",[t._v("The participation role of the attendee.")]),t._v(" "),a("h2",{attrs:{id:"icsoptions-rsvp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icsoptions-rsvp"}},[t._v("#")]),t._v(" icsOptions.rsvp")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])]),t._v(" "),a("li",[t._v("Required: no")])]),t._v(" "),a("p",[t._v("Whether or not the attendee is RSVP'd to the event.")]),t._v(" "),a("h2",{attrs:{id:"icsoptions-sentby"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icsoptions-sentby"}},[t._v("#")]),t._v(" icsOptions.sentBy")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Required: no")]),t._v(" "),a("li",[t._v("Any valid URI (e.g., "),a("code",[t._v("MAILTO:john@doe.com")]),t._v(").")])]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://www.kanzaki.com/docs/ical/sentBy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("event sender"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" attendees"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CalendarAttendees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John Doe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'john@doe.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    icsOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rsvp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jane Doe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jane@doe.com'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);