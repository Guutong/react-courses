// Async and Await

function sleep(delay, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay)
  })
}

async function run() {
  const value = await sleep(2000, 'hello')

  console.log(value)

  return value
}

run()
