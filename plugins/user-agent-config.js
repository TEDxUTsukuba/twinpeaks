export default function (context, inject) {
  // サーバーとクライアント両方からのアクセスあるので、
  // サーバーはheadersから、クライアントはnavigatorから情報を取得
  const userAgent = navigator.userAgent;

  // ユーザーエージェントの情報がMac OS Xを含み、かつontouchedがtrueならtrue
  const isFromiPadOS =
    userAgent.includes('Mac OS X') && navigator.maxTouchPoints > 0;

  // 全ページで使える共通プロパティとしてinjectする
  // vueファイルでは$isAppleでアクセスできます。
  inject('isFromiPadOS', isFromiPadOS);
}

// 参考
// https://zenn.dev/sengosha/articles/9f46b495f4c61b