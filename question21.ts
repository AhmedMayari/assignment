function intentionallyProduceIndexError() {
    const arr = [1, 2, 3]
    try {
      console.log("Trying to access invalid index:", arr[5])
    } catch (error) {
      console.error("Caught an error:", error)
    }
  }
function correctIndexError() {
    const arr = [1, 2, 3]
    console.log("Accessing valid index:", arr[0])
    console.log("Accessing corrected index:", arr[2])
  }
intentionallyProduceIndexError()
correctIndexError()