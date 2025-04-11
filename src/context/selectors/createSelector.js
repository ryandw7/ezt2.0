import { Agriculture, ArrowRight } from "@mui/icons-material";

const createSelector = (inputSelectors, outputFn) => {
    let lastArgs = null;
    let lastResult = null;

    return (state) => {
        const currentArgs = inputSelectors.map((selector) => selector(state));

        if (
            lastArgs &&
            lastArgs.length === currentArgs.length &&
            currentArgs.every((arg, index) => arg === lastArgs[index])
        ) {
            return lastResult;
        }

        lastArgs = currentArgs;
        lastResult = outputFn(...currentArgs);

        return lastResult;
    }
}

export default createSelector;