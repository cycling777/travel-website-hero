# 旅行ウェブサイトのヒーローセクション

このプロジェクトは、美しい夕日と海のグラデーションを背景にした旅行ウェブサイトのヒーローセクションを実装したものです。

## 特徴

- 美しい夕日と海のグラデーションの背景
- レスポンシブデザイン
- アニメーション効果
- モダンなUI/UXデザイン

## ファイル構成

- `index.html` - HTMLマークアップ
- `styles.css` - CSSスタイル
- `script.js` - JavaScriptアニメーションと動作

## 使用方法

1. リポジトリをクローンまたはダウンロードします
2. `index.html`をブラウザで開きます

## カスタマイズ

- 色やグラデーションは`styles.css`で変更できます
- アニメーションは`script.js`で調整できます
- テキストや構造は`index.html`で変更できます

## 技術スタック

- HTML5
- CSS3
- JavaScript (ES6+)

## GitHub Pagesへのデプロイプロセス

このプロジェクトはGitHub Pagesを使用して公開されています。以下は、デプロイプロセスの詳細です。

### 1. リポジトリの初期化と設定

最初に、ローカル環境でGitリポジトリを初期化しました：

```bash
git init
git add .
git commit -m "初期コミット：旅行ウェブサイトのヒーローセクション"
```

### 2. GitHub CLIを使用したリポジトリ作成

GitHub CLIを使用して、ローカルリポジトリからGitHubリポジトリを作成しました：

```bash
gh repo create travel-website-hero --public --source=. --push
```

このコマンドは以下の操作を自動的に行います：
- GitHubに新しいリポジトリを作成
- リモートリポジトリをローカルリポジトリに追加
- コードをリモートリポジトリにプッシュ

### 3. GitHub Actionsワークフローの設定

GitHub Pagesを自動デプロイするために、GitHub Actionsワークフローを設定しました。`.github/workflows/pages.yml`ファイルを作成し、以下の内容を追加しました：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

このワークフローは以下の処理を行います：
- mainブランチへのプッシュ時に自動的に実行
- リポジトリのコンテンツをチェックアウト
- GitHub Pages環境を設定
- ウェブサイトのファイルをアーティファクトとしてアップロード
- GitHub Pagesにデプロイ

### 4. デプロイの問題と解決

最初のデプロイ時に、`actions/upload-pages-artifact`のバージョンが古いという問題が発生しました。これを解決するために、ワークフローファイルのアクションバージョンを更新しました：

```bash
git add .github/workflows/pages.yml
git commit -m "GitHub Actionsのワークフローを修正：アクションのバージョンを更新"
git push
```

### 5. 技術的な詳細

#### CSS実装の詳細

このプロジェクトでは、以下のCSSテクニックを使用しています：

- **Flexbox**: ヘッダーやコンテンツの配置に使用
- **CSS変数**: 色やサイズの一貫性を保つために使用
- **メディアクエリ**: レスポンシブデザインの実装に使用
- **疑似要素**: 装飾的な要素の作成に使用
- **グラデーション**: 背景の美しい色合いを作成するために使用
- **アニメーション**: 視覚的な効果を追加するために使用

#### JavaScript実装の詳細

JavaScriptでは、以下の機能を実装しています：

- **DOM操作**: 要素の選択と操作
- **イベントリスナー**: ユーザーインタラクションの処理
- **アニメーション**: 太陽や雲の動きを制御
- **スクロールイベント**: スクロール時の視差効果を実装

#### GitHub Actions CI/CDパイプライン

GitHub Actionsを使用したCI/CDパイプラインにより、以下のメリットがあります：

- コードの変更がmainブランチにプッシュされると自動的にデプロイ
- 手動でのデプロイ作業が不要
- デプロイの履歴と状態が追跡可能
- 複数の環境（開発、ステージング、本番）への展開が容易

## ライブデモ

このプロジェクトは以下のURLで公開されています：
[https://cycling777.github.io/travel-website-hero/](https://cycling777.github.io/travel-website-hero/)

## ライセンス

MITライセンス

## プレビュー

![ヒーローセクションのプレビュー](preview.png)

*注: プレビュー画像は含まれていません。実際のウェブサイトの外観は、ブラウザで`index.html`を開いて確認してください。* 