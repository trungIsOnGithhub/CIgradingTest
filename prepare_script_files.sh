cp /opt/package.json $1

cp /opt/pre.js $1

cp /opt/post.js $1

cp /workflow.sh $1

cp /opt/Main.hs $1

cd $1

npm install --save
