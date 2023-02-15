// console.log("Hello World")

const task = (f, r) => {
    console.log("task run!")
    setTimeout(() => {
        // console.log("Done!")
        try {
            f("Go Go Go Go!")
        } catch (err) {
            r(err)
        }
    }, 1000)
}

const taskReject = (f, r) => {
    setTimeout(() => {
        r("Rejected :(")
    }, 1000)
}

const fullfilled = (result) => {
    console.log("Task Done! >> Success! >>", result)
}

const rejected = (err) => {
    console.log("Failed! >> ", err)
}

// new Promise(task).then(fullfilled, rejected)
new Promise(taskReject).then(fullfilled, rejected)
