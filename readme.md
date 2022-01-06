

### vue component library boilerplate

**Feature**

- pug loader
- vue
- sass loader
- dev server
- typescript type definition
- tailwind

**更新方法**

- yarn build ( rebuild 專案 type definitions )
- git commit
- git new tag
- git push

**如需要於組件庫內加入其他套件，需考慮 peer dependency （於 package.json 註明)**
```json
  "peerDependencies": {
    "vue": "^3.0.5"
  },
```
上述，以引用 vue 為例。


**package.json 引用***
```json
{
    "vue_comp_lib_boilerplate": "git+https://github.com/gordianknotC/vueCompLibBoilerplate.git#develop#v0.0.10+2"
}
```
上述設定為:
- branchname: develop
- tagname: v0.0.10+2
