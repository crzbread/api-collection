# API Collection

這個專案主要是收一些小 API。

看到有趣、可以包成 endpoint 的套件，就先放在這裡。現在主要是部署到 Vercel，用 `api/` 下面的檔案對應不同 API。

## 使用方式

安裝套件：

```bash
yarn install
```

本地啟動：

```bash
vercel dev
```

啟動後可以用 `http://localhost:3000/api/<api-name>` 測試。

## API 清單

### `en_translate`

把輸入文字翻成英文。

```http
GET /api/en_translate?text=你好
```

```json
{
  "translation": "Hello"
}
```

目前使用 `@iamtraction/google-translate`。
