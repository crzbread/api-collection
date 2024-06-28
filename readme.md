# API Collection Project

這個專案主要是提供各種 API 服務，把看到有趣的套件整合在一起，部署 Vercel 上。

## 安裝

首先，你需要將這個專案 clone 到你的本地環境：

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

然後，使用 `npm` 或 `yarn` 安裝依賴：

```bash
npm install
# 或者
yarn install
```

## 使用說明

每個 API 都在 `api` 目錄下的一個單獨的檔案中。例如，英文翻譯 API 在 `api/en_translate.js` 中。

你可以使用以下命令在本地啟動服務：

```bash
vercel dev
```

然後，你可以在瀏覽器中訪問 `http://localhost:3000/api/your-api-name` 來使用 API。

參考資料：[vercel dev](https://vercel.com/docs/cli/dev)


## API 清單
- [en_translate.js:](#en_translatejs) 使用 `@iamtraction/google-translate` 套件來實現的 Google 英文翻譯 API。


## API 說明

### en_translate.js
請求範例：
```
GET /api/en_translate?text=你好
```
回應範例
```json
{
  "translation": "Hello"
}
```

使用 `@iamtraction/google-translate` 套件來實現翻譯 API。這是一個 Node.js 套件，它提供了一個簡單的介面來使用 Google 翻譯 API。這個套件可以讓你在 Node.js 應用程式中輕鬆地進行語言翻譯。

以下是一個基本的使用範例：

```javascript
const translate = require("@iamtraction/google-translate");

translate("你好", { to: "en" })
  .then((res) => console.log(res.text))  // OUTPUT: Hello
  .catch((err) => console.error(err));
```

在這個範例中，我們將中文的 "你好" 翻譯為英文，並將翻譯結果輸出到控制台。如果翻譯過程中發生錯誤，我們將錯誤訊息輸出到控制台。


套件連結： [iamtraction/google-translate](https://github.com/iamtraction/google-translate?tab=readme-ov-file)
