

# bash ./test.sh はテストを実行するためのファイルです。
# wscli question submit コマンドを実行することで呼ばれ、
# exit コードが0の場合はテストが成功となり回答は正解になります。
# その他の場合はテストが失敗し、回答は不正解になります。

# 例
# ファイルを表示する
# cat hello.txt

# npm のテスト
npm run test -- --watchAll=false

# rails のテスト
# $ rails test

