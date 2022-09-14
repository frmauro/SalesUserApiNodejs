#!/bin/bash

# grpc_tools_node_protoc \
#     --js_out=import_style=commonjs,binary:./proto \
#     --grpc_out=grpc_js:./proto \
#     -I ./proto ./proto/*.proto && \
# grpc_tools_node_protoc \
#     --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#     --ts_out=grpc_js:./proto \
#     -I ./proto ./proto/*.proto