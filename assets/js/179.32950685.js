(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{580:function(e,t,a){"use strict";a.r(t);var o=a(44),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system"}},[e._v("#")]),e._v(" System")]),e._v(" "),a("p",[e._v("Nu offers many commands and plugins that help navigate a command-line interface, interface with the filesystem, and monitor your system.")]),e._v(" "),a("h3",{attrs:{id:"view-all-files-in-the-current-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-all-files-in-the-current-directory"}},[e._v("#")]),e._v(" View all files in the current directory")]),e._v(" "),a("p",[a("code",[e._v("ls | where type == File")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━━┯━━━━━━━━━━━━━━━━━━━━┯━━━━━━┯━━━━━━━━━━┯━━━━━━━━━━┯━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━\n #  │ name               │ type │ readonly │ size     │ created      │ accessed     │ modified\n────┼────────────────────┼──────┼──────────┼──────────┼──────────────┼──────────────┼──────────────\n  0 │ .editorconfig      │ File │          │   236 B  │ 2 months ago │ 2 months ago │ 2 months ago\n  1 │ .gitignore         │ File │          │   189 B  │ 2 months ago │ 2 months ago │ 2 months ago\n  2 │ .gitpod.Dockerfile │ File │          │   164 B  │ a month ago  │ a month ago  │ a month ago\n  3 │ .gitpod.yml        │ File │          │   803 B  │ a month ago  │ a month ago  │ a month ago\n  4 │ build.rs           │ File │          │   1.2 KB │ 3 weeks ago  │ 3 weeks ago  │ 3 weeks ago\n  5 │ Cargo.lock         │ File │          │ 153.7 KB │ a week ago   │ a week ago   │ a week ago\n  6 │ Cargo.toml         │ File │          │   4.7 KB │ a week ago   │ a week ago   │ a week ago\n  7 │ CODE_OF_CONDUCT.md │ File │          │   3.4 KB │ 2 months ago │ 2 months ago │ 2 months ago\n  8 │ features.toml      │ File │          │   443 B  │ 3 weeks ago  │ 3 weeks ago  │ 3 weeks ago\n  9 │ LICENSE            │ File │          │   1.1 KB │ 2 months ago │ 2 months ago │ 2 months ago\n 10 │ Makefile.toml      │ File │          │   647 B  │ 2 months ago │ 2 months ago │ 2 months ago\n 11 │ README.md          │ File │          │  18.3 KB │ a week ago   │ a week ago   │ a week ago\n 12 │ rust-toolchain     │ File │          │    17 B  │ a month ago  │ a month ago  │ a month ago\n 13 │ rustfmt.toml       │ File │          │    16 B  │ 2 months ago │ 2 months ago │ 2 months ago\n━━━━┷━━━━━━━━━━━━━━━━━━━━┷━━━━━━┷━━━━━━━━━━┷━━━━━━━━━━┷━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━\n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"view-all-directories-in-the-current-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-all-directories-in-the-current-directory"}},[e._v("#")]),e._v(" View all directories in the current directory")]),e._v(" "),a("p",[a("code",[e._v("ls | where type == Dir")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("────┬───────────┬──────┬──────┬──────────────\n #  │ name      │ type │ size │ modified\n────┼───────────┼──────┼──────┼──────────────\n  0 │ .azure    │ Dir  │  —   │ 1 week ago\n  1 │ .cargo    │ Dir  │  —   │ 2 months ago\n  2 │ .circleci │ Dir  │  —   │ 5 months ago\n  3 │ .git      │ Dir  │  —   │ 19 mins ago\n  4 │ .github   │ Dir  │  —   │ 3 months ago\n  5 │ assets    │ Dir  │  —   │ 5 months ago\n  6 │ crates    │ Dir  │  —   │ 1 month ago\n  7 │ debian    │ Dir  │  —   │ 4 months ago\n  8 │ docker    │ Dir  │  —   │ 3 months ago\n  9 │ docs      │ Dir  │  —   │ 4 months ago\n 10 │ images    │ Dir  │  —   │ 5 months ago\n 11 │ src       │ Dir  │  —   │ 1 week ago\n 12 │ target    │ Dir  │  —   │ 2 months ago\n 13 │ tests     │ Dir  │  —   │ 3 weeks ago\n────┴───────────┴──────┴──────┴──────────────\n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"find-processes-sorted-by-greatest-cpu-utilization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-processes-sorted-by-greatest-cpu-utilization"}},[e._v("#")]),e._v(" Find processes sorted by greatest cpu utilization.")]),e._v(" "),a("p",[a("code",[e._v("ps | where cpu > 0 | sort-by cpu | reverse")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━┯━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━\n # │ pid   │ name                  │ status  │ cpu\n───┼───────┼───────────────────────┼─────────┼───────────────────\n 0 │  8564 │ nu_plugin_ps.exe      │ Running │ 70.86496000000001\n 1 │ 13324 │ EpicGamesLauncher.exe │ Running │ 6.141082000000000\n 2 │ 21084 │ firefox.exe           │ Running │ 6.006489999999999\n 3 │ 19792 │ Code.exe              │ Running │ 5.207409999999999\n━━━┷━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━\n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"find-and-kill-a-hanging-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-and-kill-a-hanging-process"}},[e._v("#")]),e._v(" Find and kill a hanging process")]),e._v(" "),a("p",[e._v("Sometimes a process doesn't shut down correctly. Using "),a("code",[e._v("ps")]),e._v(" it's fairly easy to find the pid of this process:")]),e._v(" "),a("p",[a("code",[e._v("ps | where name == node")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━━━━━┯━━━━━━┯━━━━━━━━━┯━━━━━━━━┯━━━━━━━━━┯━━━━━━━━━\n pid   │ name │ status  │ cpu    │ mem     │ virtual \n───────┼──────┼─────────┼────────┼─────────┼─────────\n 15447 │ node │ Running │ 0.0000 │ 18.5 MB │  4.7 GB \n━━━━━━━┷━━━━━━┷━━━━━━━━━┷━━━━━━━━┷━━━━━━━━━┷━━━━━━━━━\n")])])]),a("p",[e._v("This process can be sent the kill signal in a one-liner:")]),e._v(" "),a("p",[a("code",[e._v('ps | where name == node | format "{pid}" | kill -9 $it')])]),e._v(" "),a("p",[e._v("Notes:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v('format "{pid}"')]),e._v(" is necessary for now since a value of type Int (pid) can not be converted to a string yet, which is necessary for $it. This has been fixed with 0.8.1. With version 0.8.1 you can simplify this by simply using "),a("code",[e._v("get pid")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("kill")]),e._v(" is Linux/Unix specific command, it is not built-in to nu.")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"pipeline-content-to-clipboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-content-to-clipboard"}},[e._v("#")]),e._v(" Pipeline content to clipboard")]),e._v(" "),a("p",[e._v("Add the output of a pipeline to your clipboard.\nNote, this currently needs to be string output.")]),e._v(" "),a("p",[e._v("Note that "),a("code",[e._v("clip")]),e._v(" is not yet enabled by default. If the output of "),a("code",[e._v("version | get features")]),e._v(" contains "),a("code",[e._v("clipboard-cli")]),e._v(" then your copy of NuShell contains\n"),a("code",[e._v("clip")]),e._v(". If "),a("code",[e._v("clip")]),e._v(" is not available, then your operating system may provide a\ncommand that performs a similar function e.g. "),a("code",[e._v("clip")]),e._v(" on Windows or "),a("code",[e._v("pbcopy")]),e._v("\non macOS.")]),e._v(" "),a("p",[a("code",[e._v("sys | get mem | to json | clip")])]),e._v(" "),a("p",[e._v("Output pasted from "),a("code",[e._v("clip")]),e._v(" 😃")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{"total":17125339136,"free":8653758464,"swap total":34305208320,"swap free":19703889920}\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);