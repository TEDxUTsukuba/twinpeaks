export default function (context, inject) {
  // サーバーとクライアント両方からのアクセスあるので、
  // サーバーはheadersから、クライアントはnavigatorから情報を取得
  const userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent;

  // ユーザーエージェントの情報がMac OS Xを含んでいたらtrue
  const isApple =
    userAgent.includes('Mac OS X');

  // 全ページで使える共通プロパティとしてinjectする
  // vueファイルでは$isAppleでアクセスできます。
  inject('isApple', isApple);
}