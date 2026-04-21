git commit -m "type(scope):message"

eg
git commit -m "fix(ui):corrected button alignment"

Type - what kind of change this is
    common types
        1. feat - new feature
        2. fix - fixing a bug
        3. style - formatting with no logic change
        4. refactor - improving code without changing the behaviour
        5. chore - maintenance work: dependencies, env files, configs, setups, containers etc
        6. test - managing tests


Scope - what aspect does the change affect/ where did it happen
    examples
        1. ui - user interface
        2. navbar - navigation bar
        3. database - database
        4. postgreSQL - database
        5. api - backend
        6. endpoint - backend 
        7. auth - authentication


Message - what exactly changed

    Rules of writing a good message:
        1. is short
        2. clear and straight to the point
        3. it is in the now(present tense)
        4. describes what and not how

    bad examples:
        a. did some changes
        b. fixed stuff
        c. code has been updated


    good example:
        feat(auth) - prevent empty password submission


exercise 1:
    Rewrite the following messy history as proper commits
        update
        done
        fix
        again