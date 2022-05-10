
# 概要

# 問題の保存

サーバへ保存するには、'wscli question-admin save' コマンドを使用します。

# フォルダ構成
- example-questions-react-todo
    - initial     => 問題を解く時の初期ディレクトリ
    - model/      => 問題の模範解答ディレクトリ
    - override/   => 問題を採点する際に上書きするディレクトリ
    - config.json => 問題の設定ファイル
    - content.md  => 問題文
    - hint.md     => ヒント

# 採点の仕組み
...

1. overrideフォルダに存在するファイルを上書き
2. config.json の "command" を実行
2. 採点結果をアップロードします。
