export API_KEY=NR23lHuWdW6R7zrBe5kqa-mKviTOPPnFF0GQEohuy14HAzFuXTtO-g==

ghc Main.hs
if [ $? -eq 0 ]; then
    echo "COMPILE OK"
else
    echo "COMPILE FAILED"
    exit 1
fi


node pre.js
if [ $? -eq 0 ]; then
    echo "PRE-EXECUTION OK"
else
    echo "PRE-EXECUTION FAILED"
    exit 1
fi

./Main
if [ $? -eq 0 ]; then
    echo "EXECUTE OK"
else
    echo "EXECUTE FAILED"
    exit 1
fi

node post.js
if [ $? -eq 0 ]; then
    echo "POST-EXECUTION OK"
else
    echo "POST-EXECUTION FAILED"
    exit 1
fi
