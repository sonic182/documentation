(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{432:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ranking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ranking-rules"}},[t._v("#")]),t._v(" Ranking rules")]),t._v(" "),a("p",[a("em",[t._v("Child route of the "),a("RouterLink",{attrs:{to:"/references/settings.html"}},[t._v("settings route")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Ranking rules are built-in rules that "),a("strong",[t._v("ensure relevancy in search results")]),t._v(". Ranking rules are applied in a default order which can be changed in the settings. You can add or remove rules and change their order of importance.")]),t._v(" "),a("p",[t._v("Ranking rules can also be updated directly through the "),a("RouterLink",{attrs:{to:"/references/settings.html#update-settings"}},[t._v("global settings route")]),t._v(" along with the other settings.")],1),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html"}},[t._v("Learn more about ranking rules and their relevancy")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("Updating the settings means overwriting the default settings of MeiliSearch. You can reset to default values using the "),a("code",[t._v("DELETE")]),t._v(" routes.")])]),t._v(" "),a("h2",{attrs:{id:"get-ranking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-ranking-rules"}},[t._v("#")]),t._v(" Get ranking rules")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid/settings/ranking-rules"}}),t._v(" "),a("p",[t._v("Get the "),a("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html#ranking-rules"}},[t._v("ranking rules")]),t._v(" of an index.")],1),t._v(" "),a("h4",{attrs:{id:"path-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"default-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-value"}},[t._v("#")]),t._v(" Default value")]),t._v(" "),a("p",[t._v("An array that contains "),a("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html#order-of-the-rules"}},[t._v("built-in ranking rules")]),t._v(" sorted by order of importance.")],1),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("CodeSamples",{attrs:{id:"get_ranking_rules_1"}}),t._v(" "),a("h4",{attrs:{id:"response-200-ok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("200 Ok")])]),t._v(" "),a("p",[t._v("List the settings.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"typo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"words"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proximity"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"attribute"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wordsPosition"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exactness"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"desc(release_date)"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"update-ranking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-ranking-rules"}},[t._v("#")]),t._v(" Update ranking rules")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:index_uid/settings/ranking-rules"}}),t._v(" "),a("p",[t._v("Update the "),a("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html#ranking-rules"}},[t._v("ranking rules")]),t._v(" of an index.")],1),t._v(" "),a("h4",{attrs:{id:"path-variables-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),a("p",[t._v("An array that contain ranking rules sorted by order of importance.")]),t._v(" "),a("p",[t._v("To add your own ranking rule, you have to communicate either "),a("code",[t._v("asc")]),t._v(" for ascending order or "),a("code",[t._v("desc")]),t._v(" for descending order followed by the field name in brackets.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("To apply an "),a("strong",[t._v("ascending sorting")]),t._v(" (results sorted by increasing value of the attribute): "),a("code",[t._v("asc(attribute_name)")])])]),t._v(" "),a("li",[a("p",[t._v("To apply a "),a("strong",[t._v("descending sorting")]),t._v(" (results sorted by decreasing value of the attribute): "),a("code",[t._v("desc(attribute_name)")])])])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guides/advanced_guides/settings.html#ranking-rules"}},[t._v("More information about the body")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("CodeSamples",{attrs:{id:"update_ranking_rules_1"}}),t._v(" "),a("h4",{attrs:{id:"response-202-accepted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("code",[t._v("updateId")]),t._v(" allows you to "),a("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"reset-ranking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-ranking-rules"}},[t._v("#")]),t._v(" Reset ranking rules")]),t._v(" "),a("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid/settings/ranking-rules"}}),t._v(" "),a("p",[t._v("Reset the "),a("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html#ranking-rules"}},[t._v("ranking rules")]),t._v(" of an index to its default value.")],1),t._v(" "),a("h4",{attrs:{id:"default-value-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-value-2"}},[t._v("#")]),t._v(" Default value")]),t._v(" "),a("p",[t._v("An array that contains "),a("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html#order-of-the-rules"}},[t._v("built-in ranking rules")]),t._v(" sorted by order of importance.")],1),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"typo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"words"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proximity"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"attribute"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wordsPosition"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"exactness"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("To remove all ranking rules, which is not recommended in any case, you would send an empty array to the "),a("RouterLink",{attrs:{to:"/references/ranking_rules.html#update-ranking-rules"}},[t._v("add or replace ranking rules route")]),t._v(".")],1),t._v(" "),a("h4",{attrs:{id:"path-variables-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Variable")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("index_uid")])]),t._v(" "),a("td",[t._v("The index UID")])])])]),t._v(" "),a("h4",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("CodeSamples",{attrs:{id:"reset_ranking_rules_1"}}),t._v(" "),a("h4",{attrs:{id:"response-202-accepted-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),a("code",[t._v("202 Accepted")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This "),a("code",[t._v("updateId")]),t._v(" allows you to "),a("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);