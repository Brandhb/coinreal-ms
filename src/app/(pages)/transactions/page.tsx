import { Transaction, columns } from "./columns"


async function getData(): Promise<Transaction[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      
    </div>
  )
}
