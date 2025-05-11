import shutil
import os


STATES = ['idle', 'run', 'stand', 'swipe']

anigirl = input('anigirl gif name:\n')
os.mkdir(f'/home/abs/projects/vscode-pets-anigirls/media/{anigirl}')
for state in STATES:
    shutil.copy2(f'/home/abs/anigifs/{anigirl}.gif', f'/home/abs/projects/vscode-pets-anigirls/media/{anigirl}/black_{state}_8fps.gif')

# common/types.ts
# panel/pets/{anigirl}.ts
# panel/pets.ts
# npx @vscode/vsce package