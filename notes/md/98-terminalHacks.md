|Intresting Finds||||
|-|-|-|-|
|||How to check current prompt config|- echo $PS1|
|||Terminal jargons|- **username@hostname *dirpath*$** &#8594; is called prompt<br>- the thing that blinks is called CURSOR |
|||Shorten DIRPATH|- PROMPT_DIRTRIM=1<br>- [How to shorten the terminal dir](https://www.baeldung.com/linux/shorten-directory-path-command-line#:~:text=Using%20the%20PROMPT_DIRTRIM%20Variable,levels%20up%2C%20and%20so%20on.)|
|||Basic Prompt|- `export PS1='$(whoami):${PWD/*\//} $ '` <br>- `export PS1='$(whoami):${PWD##*/} $ '`|
|||Linux Prompt extension|- [Starship via VS Code](https://code.visualstudio.com/docs/terminal/appearance)<br>- [Direct Link to Starship Website](https://starship.rs/)|
