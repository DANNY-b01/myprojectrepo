import Image from "next/image"
import ProductNav from "./ProductNav"


export default function layout({children}) {
  return (
      <div>
        <ProductNav />
        {children}
      </div>
  )
}
