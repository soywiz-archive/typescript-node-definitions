This project aims to contain several definitions of common node.js libraries
for TypeScript language in order to have autocomplete support.

It would be great if the creators of node modules, include definition files
directly on their projects. In the meanwhile this project will do the job. 

Initial definition files are from the TypeScript project "samples" folder, that
can be found here: https://typescript.codeplex.com/SourceControl/BrowseLatest

You can perform pull requests improving definitions or adding new ones.
I will add them ASAP.

In order to be able to use it easily, you can create a git submodule for
your poject adding this in the .gitmodules file:

```
[submodule "typescript-node-definitions"]
	path = typescript-node-definitions
	url = git://github.com/soywiz/typescript-node-definitions.git
```

Also you can create a "app.d.ts" file or similar including all the
definitions file that are you using in your project:

```
///<reference path='typescript-node-definitions/node.d.ts'/>
///<reference path='typescript-node-definitions/mongodb.d.ts'/>
///<reference path='typescript-node-definitions/express3.d.ts'/>
///<reference path='typescript-node-definitions/consolidate.d.ts'/>
```