IDENTITY=$1

export NETWORK=ic

# Create the NobleBlocks canisters
dfx --identity $IDENTITY canister --network $NETWORK create frontend

./scripts/deploy.sh $NETWORK $IDENTITY