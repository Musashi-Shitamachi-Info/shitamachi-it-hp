# 武蔵下町情報舎 ウェブサイト

武蔵下町情報舎（多摩地域の中小企業・個人事業主向け IT サポート）の公式ウェブサイトです。

## 技術スタック

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Cloudflare** (OpenNext によるデプロイ)

## 開発

初回セットアップ:

```bash
mise install       # Node.js / pnpm のバージョンを揃える
mise run setup     # 依存パッケージのインストール
```

開発サーバーの起動:

```bash
pnpm run dev
```

[http://localhost:3000](http://localhost:3000) でページを確認できます。

## コマンド一覧

| コマンド             | 説明                                     |
| -------------------- | ---------------------------------------- |
| `pnpm run dev`       | 開発サーバーを起動                       |
| `pnpm run build`     | Next.js ビルド                           |
| `pnpm run build:cf`  | Cloudflare 向けビルド                    |
| `pnpm run preview`   | Cloudflare 環境でローカルプレビュー      |
| `pnpm run deploy`    | Cloudflare へデプロイ                    |
| `pnpm run lint`      | ESLint + markuplint によるコードチェック |
| `pnpm run typecheck` | TypeScript 型チェック                    |

## デプロイ

[opennextjs-cloudflare](https://github.com/opennextjs/opennextjs-cloudflare) を使用して Cloudflare Workers にデプロイしています。

```bash
pnpm run login
pnpm run login:whoami

pnpm run deploy
```
