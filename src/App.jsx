import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div class="input-area">
        <input placeholder="TODOを入力"></input>
        <button>追加</button>
      </div>
      <div class="incomplete-area">
        <p class="title">未実施のTODOリスト</p>
        <ul class="list-row">
          <li>TODO</li>
          <button>完了</button>
          <button>削除</button>
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">実施済みのTODOリスト</p>
        <ul class="list-row">
          <li>TODO</li>
          <button>戻す</button>
        </ul>
      </div>
    </>
  );
};
