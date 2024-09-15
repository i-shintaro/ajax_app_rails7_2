// postという名前の関数を作成して一連の処理をまとめている
function post (){
// formという変数にHTMLページの中にあるIDが「form」の要素を入れている
 const form = document.getElementById("form");
//  submit=送信さらるときに何をするかを決めているaddEventListenerはイベントのリスナーを追加している
// preventDefaultでイベントを止めている
 form.addEventListener("submit" ,(e) => {
  e.preventDefault();
//formDataといった新しい変数に、フォームのデータをいれていて、このデータにはユーザーが入力した内容が含まれている
  const formData = new FormData(form);
//JavaScriptを用いてサーバーとHTTP通信を行うためXMLHttpRequestオブジェクトを作成し非同期通信を行う
  const XHR = new XMLHttpRequest();
//ページ全体を止めることなく処理をするためリクエストを初期化しリクエストの内容を指定している
//"post"はこれは送信方法（「ポストする」という意味）。"/posts"は送り先のURL。そして最後のtrueは非同期的に行うことを意味
  XHR.open("post", "/posts",true);
//このXHRの応答がJSON形式（データのフォーマットの一つ）であることを設定
  XHR.responseType = "json";
// sendメソッドを使って、フォームデータをサーバーに送信
  XHR.send(formData);
 });
};
//ウェブページが読み込み終わったときにpost関数を実行するようにしています
// フォォームが送信されたときに、そのデータをサーバーに送るための準備をしています。そしてページがリロードされないようにしてデータだけを送るようにしています。
window.addEventListener('turbo:load', post);
