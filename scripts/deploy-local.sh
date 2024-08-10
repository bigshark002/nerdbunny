IDENTITY=$1

# Create the NobleBlocks canisters
dfx --identity $IDENTITY canister create --no-wallet --with-cycles 100000000000000 frontend

./scripts/deploy.sh local $IDENTITY