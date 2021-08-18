#!/user/bin/env sh
set -e
echo "Enter now Date:"
read DATE
read -p "Commit some features at $DATE - are you sure? (y/n)" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Commit code ..."

    git add -A
    npm run commit
    git push origin master
fi