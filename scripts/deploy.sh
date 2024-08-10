NETWORK=$1
IDENTITY=$2

npx npm run build

rm -r build
mkdir -p build/frontend

cp -rf ./dist/* ./build/frontend/
cp -rf ./.well-known ./build/frontend/
cp -f ./.ic-assets.json ./build/frontend/

dfx deploy --network $NETWORK --identity $IDENTITY frontend
