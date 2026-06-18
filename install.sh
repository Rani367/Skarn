#!/bin/sh
# Skarn installer.
#
#   curl -fsSL https://raw.githubusercontent.com/Rani367/Skarn/main/install.sh | sh
#
# Downloads the latest release binary for your OS/arch into ~/.local/bin (or
# $SKARN_INSTALL_DIR), or falls back to `cargo install skarn` (published on
# crates.io).

set -eu

REPO="Rani367/Skarn"
BIN="skarn"
INSTALL_DIR="${SKARN_INSTALL_DIR:-$HOME/.local/bin}"

say() { printf '\033[1;34mskarn\033[0m %s\n' "$1"; }
err() { printf '\033[1;31merror\033[0m %s\n' "$1" >&2; exit 1; }

