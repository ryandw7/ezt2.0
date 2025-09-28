### CONTEXT READ ME

## EZ-T uses a simple yet robust context system using no additional libraries for managing state. State is defined and packaged in the context file, and stateTools contains reusable object creators to handle each state item. Any additions to the current state store should be updated in their corresponding object in stateTools. (For example: If you want to add a new value to unlimited data mobile lines, add it to the lineObj within stateTools)

# --> Actions --> Reducers -->

# UI State/Context

# <-- Selectors <--

# actions and selectors should only interact with the ui through Features, and should be the only connection between state and the UI

# access both only through "use" module exports. Only import individually for testing

# create new selectors with the custom createSelector import ( selector = createSelector(inputSelectors, outputFn) )
