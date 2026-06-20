# Clock — リアルタイム時計 Web アプリ

JavaScript で作る、システム時刻を **1 秒ごと** に画面へ反映するシンプルな Web アプリです。  
ブラウザの `Date` API（システムクロック）から現在時刻を取得し、表示を自動更新します。

## 機能

- システム時刻を `HH:MM:SS` 形式で表示
- 1 秒間隔で自動更新（`setInterval`）
- 外部 API 不要（オフラインでも動作）
- 追加ライブラリ不要（Vanilla JavaScript）

## 動作の仕組み

1. ページ読み込み時に `updateClock()` を実行し、初回表示を行う
2. `setInterval(updateClock, 1000)` で 1 秒ごとに同関数を呼び出す
3. `new Date()` で OS / ブラウザのシステム時刻を取得
4. 時・分・秒を 2 桁に整形して DOM に書き込む

```javascript
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);
```

## ファイル構成

```
clock/
├── index.html   # 時計表示用の HTML
├── style.css    # レイアウト・見た目
├── script.js    # 時刻取得・更新ロジック
└── README.md
```

## 使い方

### 1. ファイルを用意する

`index.html` に時刻表示用の要素を置き、`script.js` を読み込みます。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clock</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <main>
    <h1>現在時刻</h1>
    <p id="clock">--:--:--</p>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

### 2. ローカルで起動する

ブラウザで `index.html` を直接開くか、簡易 HTTP サーバーを使います。

**Python 3 の場合**

```bash
python -m http.server 8000
```

ブラウザで `http://localhost:8000` を開いてください。

**Node.js（npx）の場合**

```bash
npx serve .
```

## 技術スタック

| 項目 | 内容 |
|------|------|
| 言語 | JavaScript (ES6+) |
| 時刻取得 | `Date` オブジェクト（システム API） |
| 定期更新 | `setInterval` |
| 依存関係 | なし |

## 補足

- 表示される時刻は、利用端末のシステム時刻・タイムゾーン設定に依存します
- タブが非アクティブの間、ブラウザによって更新タイミングが若干遅れる場合があります
- ページを閉じると `setInterval` は自動的に停止します

## ライセンス

MIT License
