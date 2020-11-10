(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{438:function(t,s,e){"use strict";e.r(s);var a=e(8),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"synonyms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synonyms"}},[t._v("#")]),t._v(" Synonyms")]),t._v(" "),e("p",[e("em",[t._v("Child route of the "),e("RouterLink",{attrs:{to:"/references/settings.html"}},[t._v("settings route")]),t._v(".")],1)]),t._v(" "),e("p",[e("code",[t._v("Synonyms")]),t._v(" is an object containing words and their respective synonyms. A synonym in Meilisearch is considered equal to its associated word in a search query.")]),t._v(" "),e("p",[t._v("Synonyms can also be updated directly through the "),e("RouterLink",{attrs:{to:"/references/settings.html#update-settings"}},[t._v("global settings route")]),t._v(" along with the other settings.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Updating the settings means overwriting the default settings of MeiliSearch. You can reset to default values using the "),e("code",[t._v("DELETE")]),t._v(" routes.")])]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/guides/advanced_guides/synonyms.html"}},[t._v("Learn more about synonyms")])],1),t._v(" "),e("h2",{attrs:{id:"get-synonyms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-synonyms"}},[t._v("#")]),t._v(" Get synonyms")]),t._v(" "),e("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid/settings/synonyms"}}),t._v(" "),e("p",[t._v("Get the list of "),e("RouterLink",{attrs:{to:"/guides/advanced_guides/synonyms.html"}},[t._v("synonyms")]),t._v(" of an index.")],1),t._v(" "),e("h4",{attrs:{id:"path-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("index_uid")])]),t._v(" "),e("td",[t._v("The index UID")])])])]),t._v(" "),e("h4",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("CodeSamples",{attrs:{id:"get_synonyms_1"}}),t._v(" "),e("h4",{attrs:{id:"response-200-ok"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),e("code",[t._v("200 OK")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wolverine"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmen"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logan"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"logan"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wolverine"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xmen"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wow"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world of warcraft"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"update-synonyms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-synonyms"}},[t._v("#")]),t._v(" Update synonyms")]),t._v(" "),e("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index_uid/settings/synonyms"}}),t._v(" "),e("p",[t._v("Update the list of "),e("RouterLink",{attrs:{to:"/guides/advanced_guides/synonyms.html"}},[t._v("synonyms")]),t._v(" of an index.")],1),t._v(" "),e("h4",{attrs:{id:"path-variables-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("index_uid")])]),t._v(" "),e("td",[t._v("The index UID")])])])]),t._v(" "),e("h4",{attrs:{id:"body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),e("p",[t._v("An object that contains all synonyms and their associated words.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/guides/advanced_guides/settings.html#synonyms"}},[t._v("More information about the body")]),t._v(".")],1),t._v(" "),e("h4",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("CodeSamples",{attrs:{id:"update_synonyms_1"}}),t._v(" "),e("h4",{attrs:{id:"response-202-accepted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),e("code",[t._v("202 Accepted")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This "),e("code",[t._v("updateId")]),t._v(" allows you to "),e("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"reset-synonyms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset-synonyms"}},[t._v("#")]),t._v(" Reset synonyms")]),t._v(" "),e("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid/settings/synonyms"}}),t._v(" "),e("p",[t._v("Reset the list of "),e("RouterLink",{attrs:{to:"/guides/advanced_guides/synonyms.html"}},[t._v("synonyms")]),t._v(" of an index to its default value.")],1),t._v(" "),e("h4",{attrs:{id:"default-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-value"}},[t._v("#")]),t._v(" Default value")]),t._v(" "),e("p",[t._v("Empty object : "),e("code",[t._v("{}")])]),t._v(" "),e("h4",{attrs:{id:"path-variables-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Variable")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v("index_uid")])]),t._v(" "),e("td",[t._v("The index UID")])])])]),t._v(" "),e("h4",{attrs:{id:"example-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("CodeSamples",{attrs:{id:"reset_synonyms_1"}}),t._v(" "),e("h4",{attrs:{id:"response-202-accepted-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),e("code",[t._v("202 Accepted")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This "),e("code",[t._v("updateId")]),t._v(" allows you to "),e("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1)],1)}),[],!1,null,null,null);s.default=n.exports}}]);