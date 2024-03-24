export API_KEY=NR23lHuWdW6R7zrBe5kqa-mKviTOPPnFF0GQEohuy14HAzFuXTtO-g==

cp /opt/package.json $1

cp /opt/pre.js $1

cp /opt/post.js $1

cp /opt/shell.js $1

npm install --save --prefix $1
