import axios from "axios";
import { IUserAccount } from "@/types/userAccount";

export const useAuthentication = (email: string, password: string) => {
  const fetchData = async () => {
    try {
      const db = await axios.get("http://localhost:3005/users");

      const user = Object.values(db.data).find(
        (u: IUserAccount) => u.email === email && u.password === password
      );

      if (user == undefined) localStorage.removeItem("user");
      else {
        localStorage.setItem("user", JSON.stringify(user));
        location.reload();
      }
    } catch (error) {
      console.error("Error with fetching data:", error);
      return false;
    }
  };

  fetchData();
};
