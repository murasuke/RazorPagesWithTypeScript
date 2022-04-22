# ASP.NET MVC + TypeScript + JQuery サンプル

ASP.NET MVCでもTypeScriptを使ってコーディングをしたいと思いましたが、自分の思うような例がなかったためサンプルを作成しました。

※Visual Studio 2022で確認しています

## 要件

1. 面倒な設定はできる限り行わない
    * ビルドスクリプト(gulp)やバンドラー(webpack))を利用しない
1. jQueryを利用可能とする
1. Visual Studioから実行時にTypeScriptが自動でコンパイルされるようにする
    * TypeScriptのコンパイルを別に行わない。`F5`キーのみで実行できる状態にする



## 実現方法

### 要件1. 2. について

ブラウザ側でimportしたモジュールを実行するためには、トランスパイルしたjsファイルと利用モジュールを１ファイルにまとめる`バンドル`処理が必要になります。
[webpack](https://webpack.js.org/)などのバンドラーは設定が難しく、本質的なことを始める前に挫折する原因になるため今回は利用しません。

バンドラーを利用せずに別のJSファイル利用する方法として、TypeScriptを下記モジュール形式にする方法があります。
1. ESModules 形式
1. AMDモジュール形式＋[RequireJS](https://requirejs.org/)を利用

ESModule形式であれば、ブラウザ側でimportをするとサーバから必要なjsファイルを取得してくれるため、非常に簡単に処理することができます。ところが、jQueryがESModule形式をサポートしていないため今回の要件を満たすことができません。
幸いAMD形式はサポートされているため、`AMD形式モジュール' + 'RequireJS`による動的読み込み形式を利用することとします。

### 要件3. について

TypeScriptファイルを保存すると自動でjsファイルにコンパイルしてくれるツールを導入します。

* NuGetパッケージマネージャを起動して、検索欄に`Microsoft.TypeScript.MSBuild`を入力してインストールします。


## 制限事項

* npm でインストールするモジュールは基本的に利用不可
  * 読み込みがRequireJSに依存しているため、CommonJS形式のモジュールは利用不可(AMDのみ)


## 実装手順

### 1. Razor pagesプロジェクトを作成する

### 2. TypeScript関連設定

* TypeScriptを保存するフォルダ(`scripts/js`)を作成する

`scripts`直下ではなく`/js`の下にファイルを作成します。RequireJSでファイルをロードする際、`/js`フォルダに入れておくと読み込みやすいためです(baseURLの制限)

* `tsconfig.tson`を追加

```json
{
  "compileOnSave": true,
  "compilerOptions": {
    "noImplicitAny": false,
    "noEmitOnError": true,
    "removeComments": false,
    "inlineSourceMap": true,
    "target": "ES2015",
    "module": "AMD",
    "outDir": "wwwroot/js",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  },
  "include": ["scripts/**/*"]
}
```

|  項目  |  説明  |
| ---- | ---- |
|  module  |  AMD形式で出力  |
|  outDir  |  トランスパイルしたjsの保存先  |
|  allowSyntheticDefaultImports  |  jQuery利用のために必要  |
|  esModuleInterop  |  jQuery利用のために必要  |


* `Microsoft.TypeScript.MSBuild`をインストール(.tsファイル保存時に自動でトランスパイル)

NuGetパッケージマネージャを起動して、検索欄に`Microsoft.TypeScript.MSBuild`を入力してインストールします。


### jQueryのインストール

jQueryと型定義をインストールします

```bash
npm init -y
npm i jquery @types/jquery
```

jQueryのソースファイルを`wwwroot/js/lib/`にコピーする(フォルダは適宜作成してください)

jQueryのソースは下記フォルダに配置されています。
`node_modules\jquery\dist\jquery.min.js`

### 動作確認用TypeScriptソース

### RequireJSの設定

```javascript
var require = {
    baseUrl: "js",

    paths: {
        'jquery': 'lib/jquery.min'
    }
};
```

_Layout.cshtml

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@ViewData["Title"] - ASP.NET MVC with Typescript, jQuery</title>
    <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="~/css/site.css" asp-append-version="true" />
</head>
<body>
    <div class="container">
         @RenderBody()
    </div>

    <script src="~/js/site.js" asp-append-version="true"></script>
    <script data-main="app.js" src="~/js/require.js" asp-append-version="true"></script>

    @await RenderSectionAsync("Scripts", required: false)
</body>
</html>
```
