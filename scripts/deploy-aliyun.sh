#!/usr/bin/env bash
set -euo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-admin@47.98.151.172}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/lockyapp_deploy}"
REMOTE_ROOT="${REMOTE_ROOT:-/var/www/lockyapp/current}"

CODEX_RUNTIME="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies"
if ! command -v node >/dev/null 2>&1 && [[ -x "$CODEX_RUNTIME/node/bin/node" ]]; then
  export PATH="$CODEX_RUNTIME/node/bin:$PATH"
fi
if ! command -v pnpm >/dev/null 2>&1 && [[ -x "$CODEX_RUNTIME/bin/fallback/pnpm" ]]; then
  export PATH="$CODEX_RUNTIME/bin/fallback:$PATH"
fi

pnpm install --frozen-lockfile
pnpm build:pages

COPYFILE_DISABLE=1 tar --no-xattrs -C out -czf - . | ssh -i "$SSH_KEY" -o BatchMode=yes "$DEPLOY_HOST" "
  set -euo pipefail
  rm -rf '$REMOTE_ROOT'
  mkdir -p '$REMOTE_ROOT'
  tar -xzf - -C '$REMOTE_ROOT'
  find '$REMOTE_ROOT' -name '._*' -type f -delete
  find '$REMOTE_ROOT' -type d -exec chmod 755 {} +
  find '$REMOTE_ROOT' -type f -exec chmod 644 {} +
  sudo nginx -t
  sudo systemctl reload nginx
"

echo "Deployed to https://lockyapp.cn/"
