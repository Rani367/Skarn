# VHS tape for the Skarn README demo.
# Render with:  vhs docs/demo.tape   (produces docs/demo.gif)
# Requires a release build first:  cargo build --release

Output docs/demo.gif

Set Shell zsh
Set FontSize 20
Set Width 1200
Set Height 760
Set Padding 24
Set Theme "Catppuccin Mocha"
Set TypingSpeed 55ms
Set PlaybackSpeed 1.0

# --- setup (hidden): put the built binary on PATH and use a clean prompt ---
Hide
Type "export PATH=$PWD/target/release:$PATH; export PS1='%F{green}❯%f '; setopt interactive_comments; clear"
Enter
Sleep 500ms
Show

Type "# which kernel sandbox is active on this machine?"
Enter
Sleep 800ms
Type "skarn doctor"
Enter
Sleep 2.8s

Type "# now run a noisy command: sandboxed by the kernel, output compressed"
Enter
Sleep 800ms
Type "skarn run --stats -- ls -la /usr/bin"
Enter
Sleep 3.5s

Type "# 14k tokens down to ~700. errors and warnings are always kept."
Enter
Sleep 2.5s
