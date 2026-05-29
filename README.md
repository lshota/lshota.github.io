# Portfolio Site

Web エンジニア向けのポートフォリオサイト。HTML / CSS / JavaScript のみで構築。

## ファイル構成

```
portfolio/
├── index.html              # LP（メインページ）
├── works/                  # 作品詳細ページ
│   └── project-1.html      # 雛形：複製して各作品ページに
├── assets/
│   ├── css/
│   │   ├── style.css       # 共通スタイル
│   │   └── works.css       # 作品ページ用スタイル
│   ├── js/
│   │   └── script.js       # スクロール演出・モバイルメニュー
│   └── images/
│       └── works/          # 作品スクリーンショット格納用
└── README.md
```

## 編集方法

### 1. プロフィール情報の差し替え

`index.html` 内の以下を実際の情報に置き換えます。

| プレースホルダ | 内容 |
|---|---|
| `Your Name` | 名前 |
| `Web Developer / Engineer` | 肩書き |
| `your.email@example.com` | メールアドレス |
| `https://github.com/yourname` | GitHub URL |
| `https://x.com/yourname` | SNS URL |

### 2. プロフィール画像

`assets/images/profile.jpg` を配置し、`index.html` の `.about__image-placeholder` を
`<img src="assets/images/profile.jpg" alt="Profile">` に差し替え。

### 3. 作品の追加

1. `works/project-1.html` を複製して `works/project-2.html` などにリネーム
2. 内容を編集
3. `assets/images/works/` にスクリーンショットを置く
4. `index.html` の `.works` 内に新しい `.work-card` を追加してリンクを張る

### 4. スキル・経歴

`index.html` 内の `#skills` セクション、`#experience` セクションを直接編集。

## カラーテーマの変更

`assets/css/style.css` の `:root` 内の CSS 変数を編集すると、全体の配色が変わります。

```css
:root {
  --color-accent: #2563eb;  /* メインカラー */
  --color-bg: #ffffff;       /* 背景色 */
  --color-text: #1a1a1a;     /* 文字色 */
}
```

## ローカルでの確認方法

`index.html` をブラウザで直接開くか、簡易サーバーを起動：

```bash
# Python が入っていれば
python3 -m http.server 8000
# → http://localhost:8000
```

## 公開方法

### GitHub Pages（無料）

1. GitHub リポジトリを作成して push
2. Settings → Pages → Source を `main` ブランチに設定
3. `https://yourname.github.io/repo-name/` で公開される

### Vercel / Netlify

リポジトリを連携するだけでデプロイ可能。独自ドメインも設定しやすい。
