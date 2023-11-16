import { request } from "@/services/api";
import { useQuery } from "react-query"
import { ShowToast } from "../infos/ToastMessage";
import { Card } from "./CardContainer";

export function Main() {
  const { data, isError, isLoading } = useQuery([], () => 
    request()
  );

  if (isError) {
    ShowToast({ message: "Something went wrong", type: "error" })
  }

  return (
    <div className="main-container">
      { !isLoading ? data?.products.map(produtos => (
        <Card products={produtos} key={ produtos.id } />
      )) : "Something went wrong" }
    </div>
  )
}