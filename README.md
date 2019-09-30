## 2019 六角學院 The F2E 挑戰賽

<a href="https://challenge.thef2e.com/user/3105" target="_blank">挑戰頁面</a>

## 第一關--蕃茄鐘

<a href="https://bcjohnblue.github.io/F2E_2nd/#/tomato-clock" target="_blank">線上展示</a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/bcjohnblue/F2E_2nd/tree/master/src/projects/TomatoClock" target="_blank">原始碼</a>

**練習目標**

1. 第一次使用 React，了解 React 安裝方式及資料夾結構
2. 學習使用 React Hooks
3. 使用 CSS Animation 做出時鐘倒數效果

**使用技術** &nbsp;`React` `React Hooks` `React CSS Modules` `CSS Animation`
<br />
<br />

## 第二關--新接龍

<a href="https://bcjohnblue.github.io/F2E_2nd/#/solitaire" target="_blank">線上展示</a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/bcjohnblue/F2E_2nd/tree/master/src/projects/Solitaire" target="_blank">原始碼</a>

**練習目標**

1. 學習 HTML5 的拖拉操作
2. 使用 React Redux 管理組件狀態

**使用技術** &nbsp;`React Redux` `React DnD (Drag and Drop)`
<br />
<br />

## 第三關--MP3 (未做)

## 第四關--線上支付

<a href="https://bcjohnblue.github.io/F2E_2nd/#/online-pay" target="_blank">線上展示</a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/bcjohnblue/F2E_2nd/tree/master/src/projects/OnlinePay" target="_blank">原始碼</a>

**練習目標**

1. 使用 React Bootstrap、Formik、Yup 進行表單驗證
2. 根據使用者螢幕大小改變頁面呈現方式 (RWD)

**使用技術** &nbsp;`React Bootstrap` `Formik and Yup` `Material UI`
<br />
<br />

## 第五關--90 秒遊戲 (未完成)

## 第六關--旅館預約服務

<a href="https://bcjohnblue.github.io/F2E_2nd/#/hotel" target="_blank">線上展示</a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/bcjohnblue/F2E_2nd/tree/master/src/projects/Hotel" target="_blank">原始碼</a>

**練習目標**

1. 使用 React 串接 API

**使用技術** &nbsp;`Axios`
<br />
<br />

## 第七關--匿名聊天室

<a href="https://bcjohnblue.github.io/F2E_2nd/#/chatroom" target="_blank">線上展示</a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/bcjohnblue/F2E_2nd/tree/master/src/projects/Chatroom" target="_blank">原始碼</a>

**練習目標**

1. 利用 createContext、useContext、useReducer 管理 global state

**使用技術** &nbsp;`React Hooks`
<br />
<br />

## 第八關--雲端硬碟

<a href="https://bcjohnblue.github.io/F2E_2nd/#/hard-drive" target="_blank">線上展示</a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/bcjohnblue/F2E_2nd/tree/master/src/projects/HardDrive" target="_blank">原始碼</a>

**練習目標**

1. 串接 firebase storage API
2. HTML 複數檔案、資料夾拖曳上傳

**使用技術** &nbsp;`Firebase`
<br />
<br />

## 第九關--筆記軟體

<a href="https://bcjohnblue.github.io/F2E_2nd/#/note" target="_blank">線上展示</a>&nbsp;&nbsp;&nbsp;<a href="https://github.com/bcjohnblue/F2E_2nd/tree/master/src/projects/Note" target="_blank">原始碼</a>

**練習目標**

1. HTML 文字編輯器

**使用技術** &nbsp; `CKEditor 5`
<br />
<br />

## 完賽心得

平常在公司開發都使用 Vue，所以我在這次 The F2E 挑戰賽趁機用 React 進行挑戰與學習。
因為從來沒用過 React，一開始只是抱著能完成幾關就完成幾關的態度進行闖關，沒想到最後能完成七關真是令人感動。

第一關剛開始面臨的挑戰就是 React 的 CSS 方式不像 Vue 這麼單純只有一種，而最後我決定選擇 CSS module 的方式看起來比較順眼。

第二關的新接龍用了一個叫 React DnD 的拖拉套件，現在想想那時候看官方文檔真是各種崩潰，看了半天並且嘗試才終於能拖動撲克牌。

第四關嘗試用一些 React 的 UI 套件，在改 Material UI css 的時候實在是花了不少時間才了解它的運作概念，RWD 也微調了很久= =

第五關 90 秒遊戲是最令人崩潰的一關，寫到一半各種 setInterval 產生障礙物的方式實在是寫不出來，有點不甘心在完賽後想說用講師說的 phaser 3 來完成卻發現有些功能跟講師講得不太一樣，google 了半天還是不知道問題出在哪，結果放棄...

第六關是最輕鬆的一關因為用熟悉的 axios 進行 API 串接這一關發現一個很厲害的 airbnb 日期套件，酷的是他們的範例是直接用 storybook。

第七關因為比較了解 Redux 的用法了，所以學著網路上的一些教學文章用 React hook 的方式建立管理自己的 global state。

第八關照著講師的教學成功串接 firebase storage，有照著講師的教學做實在輕鬆不少，另外在多個檔案拖拉上傳及處理多層資料夾結構上傳時也學了不少。

第九關，最後一周想做個完美的 ending 所以在切 component 的時侯有比較認真的想過，雖然怎麼切 component 好像都不一定有最佳解，但是在切的過程中至少會去思考了解這一部分。

感謝六角學院舉辦這活動，讓沒有設計底子的我每關都可以參考設計師們畫出的漂亮設計稿刻版還有一步步照著講師的教學就可以突然學到一堆東西。兩個月完賽了，至少學會了基本的 React Hooks、Redux。相較於兩個月前的我，有種不可思議的感覺，闖關的過程中痛苦，但發現最後竟然做到這麼多的時候實在是蠻開心的，哈。
