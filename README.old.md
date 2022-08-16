# react-memo-n-callback

useMemo hook is a way to memorise value so that it does not need to be recalculated.
It can be used to optimise performance particularly in slow functions.
The useMemo hook is only called when the dependency array is updated.
In this example, the square component is wrapped with React.memo(), then is memorised using useMemo hook,
as a result, it will only be called when the value of color changes. Hoever, function that is passed down to the child component is referentially different.
To solve this problem, a callback hook is used that has the same signature as useMemo hook. The function is only called when the output value is changed no matter how other states are changing.

# When to use React.memo()

It is a higher-order function applies to pure functional component which often renders the same output.
React automatically memorises the result of an component, if the new props are the same, React will just reuse the memorised output.
It can optimise the program performance.

# key takeaway

React.memo() -> higher order API, shadow comparing props, (same) ? use previous value : render new props
useMemo -> memorise caching value, applicable to non-primative values through props eg. obj, array
useCallback -> memorise func's output, applicable to funcs through props.

All these aim to optimising performance.
