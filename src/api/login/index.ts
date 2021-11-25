import axios from "axios";
import { endpoint } from "../../settings/endpoint";

export async function loginPage() {
  await axios.post(`${endpoint}/login`);
}
