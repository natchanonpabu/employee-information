import { NextApiRequest, NextApiResponse } from "next";
import { mockUsers } from "@/lib/mock-users";
import dayjs from "dayjs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { employeeNo, name, registerDate } = req.query;

    let filteredUsers = mockUsers;

    if (name) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(String(name).toLowerCase())
      );
    }

    if (employeeNo) {
      filteredUsers = filteredUsers.filter((user) =>
        user.employeeNo.toLowerCase().includes(String(employeeNo).toLowerCase())
      );
    }

    if (registerDate) {
      filteredUsers = filteredUsers.filter(
        (user) => user.registerDate === String(registerDate)
      );
    }

    return res.status(200).json(filteredUsers);
  }

  if (req.method === "POST") {
    const newUser = {
      id: dayjs().unix().toString(),
      registerDate: dayjs().format("DD/MM/YYYY"),
      ...req.body,
    };
    mockUsers.push(newUser);
    return res.status(201).json(newUser);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
