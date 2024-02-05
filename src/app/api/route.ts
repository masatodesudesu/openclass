export default async function handler(req: any, res: any) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    const users = await response.json()
    res.status(200).json({ users })
}
